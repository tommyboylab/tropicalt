import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ImageBanner from './ImageBanner/ImageBanner';
import Load from '../../Other/Load/Load';
import Err from '../../Other/Error/Error';

const getImgB = gql`
	{
		hero(id: 1) {
			id
			hero {
				title
				cover {
					img {
						id
						url
					}
					placeholder {
						id
						url
					}
				}
			}
		}
	}
`;

const ImgB = () => {
	const { data, error, loading } = useQuery(getImgB);

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

	return <ImageBanner heroes={data.hero.hero} />;
};
export default ImgB;
