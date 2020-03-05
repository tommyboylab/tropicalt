import React from 'react';
import Head from 'next/head';

type Meta = {
	type: string;
	title: string;
	excerpt: string;
	imgUrl: string;
	slug: string;
};

const Meta = ({ title, excerpt, imgUrl, type, slug }: Meta): JSX.Element => (
	<Head>
		<title>{title}</title>
		<meta name='title' content={title} />
		<meta name='description' content={excerpt} />
		<meta property='og:type' content='website' />
		<meta property='og:url' content={`https://tropicalt.ca/${type}/${slug}`} />
		<meta property='og:title' content={title} />
		<meta property='og:description' content={excerpt} />
		<meta property='og:image' content={`https://tropicalt.ca${imgUrl}`} />
		<meta property='twitter:card' content='summary_large_image' />
		<meta property='twitter:url' content={`https://tropicalt.ca/${type}/${slug}`} />
		<meta property='twitter:title' content={title} />
		<meta property='twitter:description' content={excerpt} />
		<meta property='twitter:image' content={`https://tropicalt.ca${imgUrl}`} />
	</Head>
);

Meta.displayName = 'MetaTags';

export default Meta;
