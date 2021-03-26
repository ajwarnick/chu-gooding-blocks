import { __ } from '@wordpress/i18n';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { withState } from '@wordpress/compose';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, PanelRow, RangeControl, Placeholder, SelectControl } from '@wordpress/components';
import { InnerBlocks } from '@wordpress/editor'; 


const ALLOWED_BLOCKS = [ 'chu-gooding/slider-item' ];


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// const SliderRangeControl = withState( {
//     slides: 2,
// } )( ( { slides, setState } ) => (
//     <RangeControl
//         label="Slides Per View"
//         value={ slides }
//         onChange={ ( slides ) => {
// 			setState( { slides } );
// 			setAttributes( { slidesPerView: slides } )
// 		} }
//         min={ 1 }
//         max={ 4 }
//     />
// ) );

import 'swiper/swiper.scss';
import './editor.scss';

export default function Edit({ attributes, isSelected, setAttributes, }) {
	const toggleSetting = () => setAttributes( { toggle: ! toggle } );

	return (
		<div { ...useBlockProps() } className='chugooding__slider'>
			<InspectorControls>
				<PanelBody title={ 'Background Color' } >
					<PanelRow>
						{/* <ColorPalette
							colors={ colors }
							value={ attributes.color }
							onChange={ changeBackgroundColor }
						/> */}
					</PanelRow>
				</PanelBody>
				<PanelBody title={ 'Slides' }>
					<PanelRow>
						{/* <SliderRangeControl/> */}
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<Swiper
				spaceBetween={10}
				slidesPerView={ 2 }
				navigation
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				>
				{attributes.slides.map((item,index) => (
                	<SwiperSlide>
						hi
						<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } />
					</SwiperSlide>
              	))}
			</Swiper>
		</div>
	);
}
