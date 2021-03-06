import { registerBlockType } from '@wordpress/blocks';

import * as otherList from './otherList';
import * as projectImagePair from './projectImagePair';
import * as projectParagraph from './projectParagraph';
import * as projectCredits from './projectCredits';
import * as relatedEtProject from './relatedEtProject';

const blocks = [
    otherList,
    projectCredits,
    projectImagePair,
    projectParagraph,
    relatedEtProject
];

function registerBlock( block ) {
    const { name, settings } = block;
    registerBlockType( name, settings );
}

blocks.forEach( registerBlock );