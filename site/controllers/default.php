<?php

return function (\Kirby\Cms\App $kirby, \Kirby\Cms\Site $site) {
    return [
        'data' => [
            'title' => $site->title()->value()
        ]
    ];
};
