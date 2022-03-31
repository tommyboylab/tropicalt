import React from 'react';
import Head from 'next/head';

type Meta = {
  title?: string;
  excerpt: string | undefined;
  imgUrl?: string;
  url: string;
};

const Meta = ({ title, excerpt, imgUrl, url }: Meta): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta name='title' content={title} />
    <meta name='description' content={excerpt} />
    <meta property='og:type' content='website' />
    <meta property='og:url' content={`https://tropicalt.ca${url}`} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={excerpt} />
    <meta property='og:image' content={`https://api.tropicalt.ca${String(imgUrl)}`} />
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={`https://tropicalt.ca${url}`} />
    <meta property='twitter:title' content={title} />
    <meta property='twitter:description' content={excerpt} />
    <meta property='twitter:image' content={`https://api.tropicalt.ca${String(imgUrl)}`} />
  </Head>
);

Meta.displayName = 'MetaTags';

export default Meta;
