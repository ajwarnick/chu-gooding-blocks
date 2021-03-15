import { registerBlockType } from '@wordpress/blocks';

import * as otherList from './otherList';
import * as projectImagePair from './projectImagePair';
import * as projectParagraph from './projectParagraph';
import * as projectCredits from './projectCredits';
import * as relatedEtProject from './relatedEtProject';
import * as scrollToTop from './scrollToTop';
import * as featuredProject from './featuredProject';
import * as featuredEt from './featuredEt';
import * as projectMeta from './projectMeta';
import * as etEventDateAndTime from './etEventDataAndTime';
import * as etAuthor from './etAuthor';
import * as etMeta from './etMeta';


const blocks = [
    // otherList,
    projectMeta,
    projectCredits,
    projectImagePair,
    projectParagraph,
    relatedEtProject,
    scrollToTop,
    featuredProject,
    featuredEt,
    etEventDateAndTime,
];

function registerBlock( block ) {
    const { name, settings } = block;
    registerBlockType( name, settings );
}

blocks.forEach( registerBlock );