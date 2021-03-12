<?php

use Kirby\Http\Response;

return [
    [
        'pattern' => 'controllers/(:all).json',
        'action' => function ($id) {
            $kirby = kirby();
            $site = $kirby->site();
            $data = null;

            $cacheActive = env('KIRBY_CACHE', false) === true && $kirby->user() === null;
            $cacheBucket = $kirby->cache('pages');
            $cacheKey = $id . '-json';

            if ($cacheActive) {
                $data = $cacheBucket->get($cacheKey);
            }

            if ($data === null) {
                $data = $kirby->controller($id, compact('kirby', 'site'));

                if ($cacheActive && !empty($data)) {
                    $cacheBucket->set($cacheKey, $data);
                }
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
