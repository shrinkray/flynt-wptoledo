<?php

namespace Flynt\Components\BlockShortcode;

use Flynt\FieldVariables;

function getACFLayout()
{
    return [
        'name' => 'BlockShortcode',
        'label' => 'Block: Shortcode',
        'sub_fields' => [
            [
                'label' => 'Shortcode',
                'name' => 'shortcode',
                'type' => 'text',
                'required' => 1,
                'instructions' => 'Enter the shortcode you want to display'
            ]
        ]
    ];
}