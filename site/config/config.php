<?php

return [

    'debug' => env('KIRBY_MODE') === 'development' || env('KIRBY_DEBUG', false),

    'panel' => [
        'install' => env('KIRBY_PANEL_INSTALL', false),
        'slug' => env('KIRBY_PANEL_SLUG', 'panel')
    ],

    'hooks' => require __DIR__ . '/hooks.php',

    'cache' => [
        'pages' => [
            'active' => env('KIRBY_CACHE', false),
            'ignore' => function ($page) {
                if (kirby()->user() !== null) return true;
                $options = $page->blueprint()->options();
                return isset($options['cache']) ? !$options['cache'] : false;
            }
        ]
    ],

    'kirby-extended' => [
        'vite' => [
            'entry' => 'main.ts'
        ]
    ]

];
