import React from 'react';
import ReactMarkdown from 'react-markdown';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Avatar from '../../Other/Avatar/Avatar';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import s from './Bio.module.scss';

const getBio = gql`
	query getAvatar {
		avatar(id: "1") {
			id
			bio
		}
	}
`;

const Bio = () => {
	const { data, error, loading } = useQuery(getBio);

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	return (
		<div key={data.avatar.id} className={s.bio}>
			<Avatar />
			<ReactMarkdown source={data.avatar.bio} />
		</div>
	);
};

export default Bio;
