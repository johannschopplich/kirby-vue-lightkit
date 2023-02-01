<?php

use Kirby\Filesystem\F;
use Kirby\Http\Response;
use Kirby\Toolkit\Controller;

return [
    [
        'pattern' => 'controllers/(:all).json',
        'action' => function ($key) {
            $kirby = kirby();
            $cache = $kirby->cache('pages');
            $data = $cache->getOrSet(
                $key . '-json',
                function () use ($kirby, $key) {
                    $controller = Controller::load($kirby->root('controllers') . '/' . $key . '.php');

                    if ($controller === null) {
                        return Response::json([
                            'error' => 'The controller does not exist'
                        ], 404);
                    }

                    return $controller->call(null, [
                        'kirby' => $kirby,
                        'site' => $kirby->site()
                    ]);
                }
            );

            return Response::json($data);
        }
    ],
    [
        'pattern' => '(:all)',
        'action' => function ($path) {
            $kirby = kirby();
            $extension = F::extension($path);

            // Try to resolve page and site files
            if (!empty($extension)) {
                $id = dirname($path);
                $filename = basename($path);

                // Try to resolve image urls for pages and drafts
                if ($page = $kirby->site()->findPageOrDraft($id)) {
                    return $page->file($filename);
                }

                // Try to resolve site files at last
                if ($file = $kirby->site()->file($filename)) {
                    return $file;
                }
            }

            // Resolve page by id or fall back to home page
            return $kirby->page($path) ?? $kirby->site()->homePage();
        }
    ]
];
