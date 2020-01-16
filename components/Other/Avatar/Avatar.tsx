import Img from '../Img/Img';

const s = require('./Avatar.scss');
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import * as React from 'react';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';

const getAvatar = gql`
	{
		avatar(id: "1") {
			id
			avatar {
				img {
					id
					url
				}
				placeholder {
					id
					url
				}
			}
			alt
		}
	}
`;

const Avatar = () => {
	const { data, error, loading } = useQuery(getAvatar);
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
		<div key={data.avatar.id} className={s.avatar}>
			<Img
				class={s.avatar.img}
				url={data.avatar.avatar.img.url}
				placeholder={data.avatar.avatar.placeholder.url}
				alt={`Image for ${data.avatar.alt}`}
			/>
		</div>
	);
};
export default Avatar;
