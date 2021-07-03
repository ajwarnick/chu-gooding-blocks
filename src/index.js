import { registerBlockType } from '@wordpress/blocks';

import * as projectImagePair from './projectImagePair';
import * as projectParagraph from './projectParagraph';
import * as projectCredits from './projectCredits';
import * as relatedEtProject from './relatedEtProject';
import * as scrollToTop from './scrollToTop';
import * as featuredProject from './featuredProject';
import * as featuredEt from './featuredEt';
import * as projectMeta from './projectMeta';
import * as etEventDateAndTime from './etEventDataAndTime';
import * as youtube from './youtube';
import * as etAuthor from './etAuthor';
import * as etTitle from './etTitle';
import * as etMeta from './etMeta';
import * as etQuote from './etQuote';
import * as emailParagraph from './emailParagraph';
import * as emailHeader from './emailHeader';
import * as emailCaption from './emailCaption';
import * as emailDate from './emailDate';
import * as emailNumber from './emailNumber';
import * as emailDivider from './emailDivider';
import * as emailImage from './emailImage';

const blocks = [
    projectMeta,
    projectCredits,
    projectImagePair,
    projectParagraph,
    relatedEtProject,
    scrollToTop,
    featuredProject,
    featuredEt,
    etEventDateAndTime,
    youtube,
    emailParagraph,
    emailHeader,
    emailCaption,
    emailDate,
    emailNumber,
    emailDivider,
    emailImage,
];

function registerBlock(block) {
    const { name, settings } = block;
    registerBlockType(name, settings);
}

blocks.forEach(registerBlock);