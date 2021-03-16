import { __ } from '@wordpress/i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';
import 'swiper/swiper.scss';

export default function Edit({ attributes, isSelected, setAttributes, }) {
	const { title, toggle } = attributes;
	const toggleSetting = () => setAttributes( { toggle: ! toggle } );

	return (
		<p { ...useBlockProps() }>
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>
			</Swiper>
		</p>
	);
}
