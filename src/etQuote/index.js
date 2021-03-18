import './style.scss';

wp.domReady(() => {
    wp.blocks.unregisterBlockStyle('core/quote', 'large');
} );

wp.blocks.registerBlockVariation(
    'core/quote',
    {
      name: 'et-quote',
      title: 'Et Quote',
      isDefault: true,
    },
);

