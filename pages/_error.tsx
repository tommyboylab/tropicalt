import React from 'react';
import Link from 'next/link';
const s = require('../components/Other/Layout/Error.scss');

type Err = {
	statusCode: any;
	res: any;
	err: any;
};

function FourOhFour({ statusCode }: Err) {
	return (
		<main className={s.error}>
			<img className={s.error} alt={`You've found an error my friend!'`} src='/static/404.png' />
			<h1 className={s.error}>
				{statusCode ? `Shit.. ${statusCode} something's wrong with the Server.` : `Something's wrong with your Browser`}
			</h1>
			<Link href={'/contact'}>
				<button type='button'>Back to start:</button>
			</Link>
		</main>
	);
}

FourOhFour.getInitialProps = ({ res, err }: Err) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default FourOhFour;
