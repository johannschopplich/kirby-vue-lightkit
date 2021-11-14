<?php

return [
    'system.loadPlugins:after' => function () {
        kirby()->extend(
            ['routes' => require __DIR__ . '/routes.php'],
            kirby()->plugin('kirby-extended/vite')
        );
    }
];
