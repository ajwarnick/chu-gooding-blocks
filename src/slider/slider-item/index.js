export const name = 'chu-gooding/slider-item';


export const settings = {
    title: 'Chu , Gooding: Slider Item',
	description: 'Example block written with ESNext standard and JSX support – build step required.',
    category: 'chu-gooding-blocks',
    icon: 'smiley',
	supports: {
		reusable: false,
		html: false,
		inserter: false,
	},
    parent: [ 'chu-gooding/slider' ],
    attributes: {
        
    },
    edit: props => {
        const { className } = props;
        return [
            <div className={className}>
                hi
                {/* <InnerBlocks /> */}
            </div>
        ];
    },
    save: props => {
        return (
            <div>
                {/* <InnerBlocks.Content /> */}
            </div>
        );
    },
};
