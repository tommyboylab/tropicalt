import React from 'react';
import Link from 'next/link';
import s from '../Resume.module.scss';

const Header = () => (
	<div className={s.name}>
		<h5 className={s.return}>
			<Link href='/'>
				<a>Return to T_T</a>
			</Link>
		</h5>
		<br />
		<br />
		<h1 className={s.T}>Thomas</h1>
		<h1 className={s.A}>Alexander</h1>
		<h1 className={s.F}>Fiala</h1>
	</div>
);

export default Header;
