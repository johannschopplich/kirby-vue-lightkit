<?php

return function (\Kirby\Cms\App $kirby) {
    return [
        'data' => [
            'title' => $kirby->site()->title()->value()
        ]
    ];
};
