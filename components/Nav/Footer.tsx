import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const s = require('./Footer.scss');
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';

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

const Footer = () => {
	const { data, error, loading } = useQuery(getFooterItems);

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const nav = data?.nav?.nav as Footer[];

	return (
		<footer className={s.footer}>
			<a href='/'>T^T</a>
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
export default () => <Footer />;
