import React from 'react';

type Meta = {
  title?: string;
  excerpt: string | undefined;
  imgUrl?: string;
  url: string;
};

const Meta = ({ title, excerpt, imgUrl, url }: Meta): JSX.Element => (
  <head>
    <title>{title}</title>
    <meta name='title' content={title} />
    <meta name='description' content={excerpt} />
    <meta property='og:type' content='website' />
    <meta property='og:url' content={`https://tropicalt.ca${url}`} />
    <meta property='og:title' content={title} />
    <meta property='og:description' content={excerpt} />
      <meta property='og:image' content={`${process.env.API}${String(imgUrl)}`} />
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:url' content={`https://tropicalt.ca${url}`} />
    <meta property='twitter:title' content={title} />
    <meta property='twitter:description' content={excerpt} />
      <meta property='twitter:image' content={`${process.env.API}${String(imgUrl)}`} />
  </head>
);

Meta.displayName = 'MetaTags';

export default Meta;
