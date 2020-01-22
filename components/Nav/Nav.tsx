import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';
const s = require('./Nav.scss');

type Nav = {
	id: string;
	title: string;
	url: string;
};

const getNavItems = gql`
	query getNav {
		nav(id: 1) {
			nav {
				id
				title
				url
			}
		}
	}
`;

const Nav = () => {
	const { data, error, loading } = useQuery(getNavItems);

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const nav = data?.nav?.nav as Nav[];

	return (
		<nav>
			<li className={s.menu}>T^T</li>
			<ul>
				{nav.map((nav) => {
					return (
						<Link href={nav.url} key={nav.id}>
							<li>{nav.title}</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};
export default () => <Nav />;
