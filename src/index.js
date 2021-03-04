import { registerBlockType } from '@wordpress/blocks';

import * as otherList from './otherList';

const blocks = [
    otherList,
];

function registerBlock( block ) {
    const { name, settings } = block;
    registerBlockType( name, settings );
}

blocks.forEach( registerBlock );