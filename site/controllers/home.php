<?php

return function (\Kirby\Cms\App $kirby) {
    $home = $kirby->site()->homePage();

    return [
        'data' => [
            'title' => $home->title()->value(),
            'text' => $home->text()->toBlocks()->toHtml()
        ]
    ];
};
