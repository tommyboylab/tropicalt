import sqip from 'sqip'; // in node will be => const sqip = require('sqip').default
import { resolve } from 'path';
(async () => {
	try {
		// Process whole folder with default settings
		const folderResults = await sqip({
			input: resolve(__dirname, '/Users/tropical/Downloads/Documents/Github/New TT/tropicalt/pages/api/input2.jpg'),
			output: resolve(__dirname, '/Users/tropical/Downloads/Documents/Github/New TT/tropicalt/pages/api/output11.svg'),
			plugins: [
				{
					name: 'sqip-plugin-primitive',
					options: {
						numberOfPrimitives: 50,
						mode: 1,
					},
				},
				`sqip-plugin-svgo`,
			],
		});
		console.log(folderResults);
	} catch (err) {
		console.log('Something went wrong generating the SQIP previews');
		console.error(err);
	}
})();
