//@ts-ignore
const path = require('path');

// @ts-ignore
module.exports = ({ config }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		loader: require.resolve('babel-loader'),
		options: {
			presets: [require.resolve('@babel/preset-typescript')],
		},
	});

	config.resolve.extensions.push('.ts', '.tsx');
	return config;
};
