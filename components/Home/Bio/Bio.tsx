import ReactMarkdown from 'react-markdown';

const s = require('./Bio.scss');
import Avatar from '../../Other/Avatar/Avatar';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import * as React from 'react';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';

const getBio = gql`
	{
		avatar(id: "1") {
			id
			bio
		}
	}
`;

const Bio = () => {
	const { data, error, loading } = useQuery(getBio);

	if (loading) {
		return <Load />;
	}
	if (error) {
		return (
			<div>
				<Err />
				{console.log(error.message)}
			</div>
		);
	}

	return (
		<div key={data.avatar.id} className={s.bio}>
			<Avatar />
			<ReactMarkdown source={data.avatar.bio} />
		</div>
	);
};
export default Bio;
