<?php

namespace KirbyExtended;

use Exception;
use Kirby\Data\Data;
use Kirby\Toolkit\F;

class Vite
{
    protected static \KirbyExtended\Vite $instance;
    protected static array $manifest;

    /**
     * Checks for `.lock` file in `/src` as indicator for development mode
     *
     * @return bool
     */
    protected function isDev(): bool
    {
        $lockFile = kirby()->root('base') . '/src/.lock';

        return F::exists($lockFile);
    }

    /**
     * Read and parse manifest file created by Vite
     *
     * @return array|null
     * @throws Exception
     */
    protected function useManifest(): ?array
    {
        if (isset(static::$manifest)) {
            return static::$manifest;
        }

        $manifestFile = kirby()->root('index') . '/' . option('kirby-extended.vite.outDir', 'dist') . '/manifest.json';

        if (!F::exists($manifestFile)) {
            if (option('debug')) {
                throw new Exception('The `manifest.json` does not exist. Run `npm run build`.');
            }

            return [];
        }

        return static::$manifest = Data::read($manifestFile);
    }

    /**
     * Gets a value of a manifest property for a specific entry
     *
     * @param string $entry
     * @param string $key
     * @return string|void
     * @throws Exception
     */
    protected function getManifestProperty(string $entry, $key = 'file')
    {
        $manifestEntry = $this->useManifest()[$entry] ?? null;
        if (!$manifestEntry) {
            if (option('debug')) {
                throw new Exception("`$entry` is not a manifest entry.");
            }

            return;
        }

        $value = $manifestEntry[$key] ?? null;
        if (!$value) {
            if (option('debug')) {
                throw new Exception("Manifest entry `$entry` does not have property `$key`.");
            }

            return;
        }

        return $value;
    }

    /**
     * Gets the URL for the specified file for development mode
     *
     * @param string $file
     * @return string
     */
    protected function assetDev(string $file): string
    {
        return option('kirby-extended.vite.devServer', 'http://localhost:3000') . "/$file";
    }

    /**
     * Gets the URL for the specified file for production mode
     *
     * @param string $file
     * @return string
     */
    protected function assetProd(string $file): string
    {
        return kirby()->url('index') . '/' . option('kirby-extended.vite.outDir', 'dist') . "/$file";
    }

    /**
     * Includes Vite's client in development mode
     *
     * @return string|null
     */
    public function client(): ?string
    {
        return $this->isDev()
            ? js($this->assetDev('@vite/client'), ['type' => 'module'])
            : null;
    }

    /**
     * Includes the CSS file for the specified entry in production mode
     *
     * @param string|null $entry
     * @param array|null $options
     * @return string|null
     * @throws Exception
     */
    public function css(string $entry = null, array $options = []): ?string
    {
        $entry ??= option('kirby-extended.vite.entry', 'index.js');

        return !$this->isDev()
            ? css(
                    $this->assetProd($this->getManifestProperty($entry, 'css')[0]),
                    $options
                )
            : null;
    }

    /**
     * Includes the JS file for the specified entry
     *
     * @param string|null $entry
     * @param array $options
     * @return string|null
     * @throws Exception
     */
    public function js(string $entry = null, array $options = []): ?string
    {
        $entry ??= option('kirby-extended.vite.entry', 'index.js');

        $file = $this->isDev()
            ? $this->assetDev($entry)
            : $this->assetProd($this->getManifestProperty($entry, 'file'));

        $options = array_merge(['type' => 'module'], $options);

        return js($file, $options);
    }

    /**
     * Gets the instance via lazy initialization
     *
     * @return \KirbyExtended\Vite
     */
    public static function getInstance(): \KirbyExtended\Vite
    {
        return static::$instance ??= new static;
    }
}
