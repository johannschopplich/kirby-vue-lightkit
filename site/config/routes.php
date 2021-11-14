<?php

use Kirby\Http\Response;
use Kirby\Toolkit\Controller;

return [
    [
        'pattern' => 'controllers/(:all).json',
        'action' => function ($name) {
            $kirby = kirby();
            $site = $kirby->site();
            $data = null;

            $cacheActive = env('KIRBY_CACHE', false) === true && $kirby->user() === null;
            $cacheBucket = $kirby->cache('pages');
            $cacheKey = $name . '-json';

            if ($cacheActive && $cacheBucket->exists($cacheKey)) {
                return Response::json($cacheBucket->get($cacheKey));
            }

            $controller = Controller::load($kirby->root('controllers') . '/' . $name . '.php');

            if ($controller === null) {
                return Response::json(['error' => 'Not Found'], 404);
            }

            $data = $controller->call(null, compact('kirby', 'site'));

            if ($cacheActive) {
                $cacheBucket->set($cacheKey, $data);
            }

            return Response::json($data);
        }
    ],
    [
        'pattern' => '(:all)',
        'action' => function ($pageId) {
            return page($pageId) ?? site()->homePage();
        }
    ]
];
