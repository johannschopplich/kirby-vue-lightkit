<?php

return function (\Kirby\Cms\App $kirby) {
    $about = $kirby->page('about');

    return [
        'data' => [
            'title' => $about->title()->value(),
            'text' => $about->text()->toBlocks()->toHtml()
        ]
    ];
};
