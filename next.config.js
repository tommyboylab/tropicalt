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

// const withStyles = require('@webdeb/next-styles')
//
// module.exports = withStyles({
//     sass: true, // use .scss files
//     modules: true, // style.(m|module).css & style.(m|module).scss for module files
//     sassLoaderOptions: {
//         sassOptions: {
//             includePaths: ["src/styles"], // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
//         },
//     },
//     // cssLoaderOptions: {...},
//     // postcssLoaderOptions: {...}
// });