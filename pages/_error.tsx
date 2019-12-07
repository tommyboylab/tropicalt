import React from 'react';
import Link from 'next/link';
import s from '../components/Other/Layout/Error.module.scss';

type Err = {
	statusCode?: number;
	res: { statusCode?: number };
	err: { statusCode?: number };
};

function FourOhFour({ statusCode }: Err): JSX.Element {
	return (
		<main className={s.error}>
			<img className={s.error} alt={`You've found an error my friend!'`} src='/static/404.png' />
			<h1 className={s.error}>
				{statusCode ? `Shit.. ${statusCode} something's wrong with the Server.` : `Something's wrong with your Browser`}
			</h1>
			<Link href={'/contact'}>
				<button type='button'>{`Tell me 'bout it!`}</button>
			</Link>
		</main>
	);
}

FourOhFour.getInitialProps = ({ res, err }: Err): { statusCode?: number } => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default FourOhFour;
