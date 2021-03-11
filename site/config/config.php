<?php

$base = dirname(__DIR__, 2);
\KirbyExtended\Env::load($base);

return [

    'debug' => env('KIRBY_DEBUG', false),

    'panel' => [
        'install' => env('KIRBY_PANEL_INSTALL', false),
        'slug' => env('KIRBY_PANEL_SLUG', 'panel')
    ],

    'cache' => [
        'pages' => [
            'active' => env('KIRBY_CACHE', false),
            'ignore' => function ($page) {
                if (kirby()->user() !== null) return true;
                $options = $page->blueprint()->options();
                return isset($options['cache']) ? !$options['cache'] : false;
            }
        ]
    ]

];
