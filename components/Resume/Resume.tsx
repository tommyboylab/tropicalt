import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Load from '../Other/Load/Load';
import Err from '../Other/Error/Error';
import React from 'react';
import Header from './Nav/Header';
import Contact from './Contact/Contact';
import WorkExp from './WorkExp/WorkExp';
import Edu from './Education/Education';
import HighlightImg from './Image/Image';
import Hobbies from './Hobbies/Hobbies';
import Footer from './Nav/Footer';
import Skills from './Skills/Skills';

const getResume = gql`
	{
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

const Resume = () => {
	const { data, error, loading } = useQuery(getResume);
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
		<React.Fragment>
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
		</React.Fragment>
	);
};
export default () => <Resume />;
