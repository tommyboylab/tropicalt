import React from 'react';
import Head from 'next/head';

type Meta = {
	type: string;
	title: string;
	excerpt: string;
	url: string;
	slug: string;
};

export default ({ title, excerpt, url, type, slug }: Meta) => (
	<Head>
		!-- Primary Meta Tags -->
		<title>{title}</title>
		<meta name='title' content={title} />
		<meta name='description' content={excerpt} />
		!-- Open Graph / Facebook -->
		<meta property='og:type' content='website' />
		<meta property='og:url' content={`https://tropicalt.ca/${type}/${slug}`} />
		<meta property='og:title' content={title} />
		<meta property='og:description' content={excerpt} />
		<meta property='og:image' content={`https://tropicalt.ca/${url}`} />
		!-- Twitter -->
		<meta property='twitter:card' content='summary_large_image' />
		<meta property='twitter:url' content={`https://tropicalt.ca/${type}/${slug}`} />
		<meta property='twitter:title' content={title} />
		<meta property='twitter:description' content={excerpt} />
		<meta property='twitter:image' content={`https://tropicalt.ca/${url}`} />
	</Head>
);
