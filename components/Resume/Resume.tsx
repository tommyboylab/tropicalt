import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Header from './Nav/Header';
import Contact from './Contact/Contact';
import WorkExp from './WorkExp/WorkExp';
import Edu from './Education/Education';
import HighlightImg from './Image/Image';
import Hobbies from './Hobbies/Hobbies';
import Footer from './Nav/Footer';
import Skills from './Skills/Skills';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';

const getResume = gql`
	query getResume {
		resume(id: 1) {
			id
			address
			phoneNum
			workExp
			edu
			skills
			highlight {
				img {
					id
					url
				}
				placeholder {
					id
					url
				}
			}
			hobbies
			email
		}
	}
`;

const Resume = (): JSX.Element => {
	const { data, error, loading } = useQuery(getResume);

	if (loading && !data) return <Load />;
	if (error) return <Err />;

	return (
		<>
			<Header />
			<Contact phone={data.resume.phoneNum} address={data.resume.address} />
			<WorkExp content={data.resume.workExp} />
			<Edu content={data.resume.edu} />
			<Skills content={data.resume.skills} />
			<HighlightImg
				url={data.resume.highlight.img.url}
				placeholder={data.resume.highlight.placeholder.url}
				alt='Resume'
			/>
			<Hobbies content={data.resume.hobbies} />
			<Footer email={data.resume.email} />
		</>
	);
};

Resume.displayName = 'Resume';

export default Resume;
