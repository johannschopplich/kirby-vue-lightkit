<?php

return function (\Kirby\Cms\App $kirby, \Kirby\Cms\Site $site) {
    $home = $site->homePage();

    return [
        'data' => [
            'title' => $home->title()->value(),
            'text' => $home->text()->toBlocks()->toHtml()
        ]
    ];
};
