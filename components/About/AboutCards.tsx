import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Text from './AboutCard/AboutCardText';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';
import Img from '../Other/Img/Img';
const s = require('./AboutCards.scss');

interface About {
	img: { img: { url: string }; placeholder: { url: string } };
	id: string;
	title: string;
	excerpt: string;
}

const getAboutCards = gql`
	{
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
		<>
			{data.aboutCards.map((About: About) => {
				return (
					<React.Fragment key={About.id}>
						<Img
							class={s.aboutCardImg}
							url={About.img.img.url}
							placeholder={About.img.placeholder.url}
							alt={`Image for ${About.title}`}
						/>
						<Text title={About.title} excerpt={About.excerpt} />
					</React.Fragment>
				);
			})}
		</>
	);
};
export default () => <AboutCards />;
