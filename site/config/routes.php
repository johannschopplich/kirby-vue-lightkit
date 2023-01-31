<?php

use Kirby\Http\Response;
use Kirby\Toolkit\Controller;

return [
    [
        'pattern' => 'controllers/(:all).json',
        'action' => function ($key) {
            $kirby = kirby();
            $data = $kirby->cache('pages')->getOrSet(
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
        'action' => function ($pageId) {
            $kirby = kirby();
            return $kirby->page($pageId) ?? $kirby->site()->homePage();
        }
    ]
];
