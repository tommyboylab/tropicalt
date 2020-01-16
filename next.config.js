const withSass = require( '@zeit/next-sass' );
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
] );

