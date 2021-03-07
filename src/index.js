import { registerBlockType } from '@wordpress/blocks';

import * as otherList from './otherList';
import * as projectImagePair from './projectImagePair';
import * as projectParagraph from './projectParagraph';
import * as projectCredits from './projectCredits';
import * as relatedEtProject from './relatedEtProject';
import * as scrollToTop from './scrollToTop';
import * as featuredProject from './featuredProject';

const blocks = [
    otherList,
    projectCredits,
    projectImagePair,
    projectParagraph,
    relatedEtProject,
    scrollToTop,
    featuredProject
];

function registerBlock( block ) {
    const { name, settings } = block;
    registerBlockType( name, settings );
}

blocks.forEach( registerBlock );