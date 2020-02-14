import React from 'react';
import Link from './ActiveLink/ActiveLink';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';
import s from './Footer.module.scss';

type Footer = {
	id: string;
	title: string;
	url: string;
};

const getFooterItems = gql`
	query getFooter {
		nav(id: 1) {
			nav {
				id
				title
				url
			}
		}
	}
`;

const Footer = (): JSX.Element => {
	const { data, error, loading } = useQuery(getFooterItems);

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const nav = data?.nav?.nav as Footer[];

	return (
		<footer className={s.footer}>
			<Link href='/'>
				<li>T^T</li>
			</Link>
			<h3>Made by Thomas Fiala with a little help from Education</h3>
			<ul>
				{nav.map((nav) => {
					return (
						<Link href={nav.url} key={nav.id}>
							<li>{nav.title}</li>
						</Link>
					);
				})}
			</ul>
		</footer>
	);
};

Footer.displayName = 'Footer';
export default Footer;
