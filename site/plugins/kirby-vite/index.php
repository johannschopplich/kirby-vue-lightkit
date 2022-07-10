<?php

load([
    'KirbyExtended\\Vite' => 'classes/KirbyExtended/Vite.php',
], __DIR__);

\Kirby\Cms\App::plugin('kirby-extended/vite', [
    'options' => [
        'entry' => 'main.js',
        'outDir' => 'dist',
        'devServer' => 'http://localhost:5173'
    ]
]);

/**
 * Returns the Vite instance
 *
 * @return \KirbyExtended\Vite
 */
function vite()
{
    return \KirbyExtended\Vite::getInstance();
}
