import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Text from './AboutCard/AboutCardText';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';
import Img from '../Other/Img/Img';
const s = require('./AboutCards.scss');

type AboutCard = {
	img: { img: { url: string }; placeholder: { url: string } };
	id: string;
	title: string;
	excerpt: string;
};

const getAboutCards = gql`
	query aboutCards {
		aboutCards {
			id
			title
			excerpt
			img {
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
`;

const AboutCards = () => {
	const { data, error, loading } = useQuery(getAboutCards);

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	const aboutCards = data?.aboutCards as AboutCard[];

	return (
		<>
			{aboutCards.map((aboutCard) => {
				return (
					<Fragment key={aboutCard.id}>
						<Img
							class={s.aboutCardImg}
							url={aboutCard.img.img.url}
							placeholder={aboutCard.img.placeholder.url}
							alt={`Image for ${aboutCard.title}`}
						/>
						<Text title={aboutCard.title} excerpt={aboutCard.excerpt} />
					</Fragment>
				);
			})}
		</>
	);
};
export default () => <AboutCards />;
