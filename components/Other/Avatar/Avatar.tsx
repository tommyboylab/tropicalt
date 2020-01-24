import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Img from '../Img/Img';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';
import s from './Avatar.module.scss';

const getAvatar = gql`
	query getAvatar {
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

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	return (
		<div key={data.avatar.id} className={s.avatar}>
			<Img
				class={s.avatar}
				url={data.avatar.avatar.img.url}
				placeholder={data.avatar.avatar.placeholder.url}
				alt={`Image for ${data.avatar.alt}`}
			/>
		</div>
	);
};

export default Avatar;
