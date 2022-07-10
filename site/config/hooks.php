<?php

return [
    'system.loadPlugins:after' => function () {
        kirby()->extend([
            'routes' => require __DIR__ . '/routes.php'
        ]);
    }
];
