<?php

use Kirby\Http\Response;
use Kirby\Toolkit\Controller;

return [
    [
        'pattern' => 'controllers/(:all).json',
        'action' => function ($key) {
            $kirby = kirby();
            $cache = $kirby->cache('pages');
            $cacheKey = $key . '-json';
            $data = $cache->get($cacheKey);

            if ($data === null) {
                $controller = Controller::load($kirby->root('controllers') . '/' . $key . '.php');

                if ($controller === null) {
                    return Response::json([
                        'error' => 'The controller does not exist'
                    ], 404);
                }

                $data = $controller->call(null, [
                    'kirby' => $kirby,
                    'site' => $kirby->site()
                ]);

                $cache->set($cacheKey, $data);
            }

            return Response::json($data);
        }
    ],
    [
        'pattern' => '(:all)',
        'action' => function ($pageId) {
            $kirby = kirby();
            return $kirby->page($pageId) ?? $kirby->site()->homePage();
        }
    ]
];
