const withSass = require( '@zeit/next-sass' );
const withOptimizedImages = require( 'next-optimized-images' );
const withPlugins = require('next-compose-plugins');

// fix: prevents error when .css files are required by node
if ( typeof require !== 'undefined' )
{
    require[ '.scss' ] = file => { };
}

module.exports = withPlugins( [
    [ withSass, {
        cssModules: true,
        cssLoaderOptions: {
                localIdentName: '[local]___[hash:base64:5]'
        }
    } ],
    [ withOptimizedImages, {
        // these are the default values so you don't have to provide them if they are good enough for your use-case.
        // but you can overwrite them here with any valid value you want.
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: [ 'jpeg', 'png', 'webp','ico',],
        optimizeImages: true,
        optimizeImagesInDev: true,
        lqip: {
            base64: true,
            palette: true,
        },
        responsive: {
            adapter: require( 'responsive-loader/sharp' ),
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    } ],

] );

