import React from 'react';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';
import Head from 'next/head';
import { useApollo } from '../apollo/apolloClient';
import { AppContext, AppInitialProps } from 'next/app';

const globalStyle = {
  __html: `
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    font-family: Didact Gothic;
    font-size:1.15rem;
    line-height:1.5em;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  h1 {
   font-family: Raleway;
  }

  /* didact-gothic-regular - latin */
  @font-face {
    font-family: 'Didact Gothic';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(/static/fonts/DidactGothic/didact-gothic-v13-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Didact Gothic Regular'), local('DidactGothic-Regular'),
       url('/static/fonts/DidactGothic/didact-gothic-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/DidactGothic/didact-gothic-v13-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/DidactGothic/didact-gothic-v13-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/DidactGothic/didact-gothic-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts//DidactGothicdidact-gothic-v13-latin-regular.svg#DidactGothic') format('svg'); /* Legacy iOS */
  }
  
 /* raleway-regular - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/static/fonts/Raleway/raleway-v14-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Raleway'), local('Raleway-Regular'),
       url('/static/fonts/Raleway/raleway-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/Raleway/raleway-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/Raleway/raleway-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/Raleway/raleway-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/Raleway/raleway-v14-latin-regular.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  
  ::selection {
    color:Jade;
    background: Violet; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    color:Jade;
    background: Violet; /* Gecko Browsers */
  }
  ::placeholder{ /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgb(0, 255, 136);
  }
  ::-ms-input-placeholder {
    color: rgb(0, 255, 136);
  }

/* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
  border-bottom: 2px solid #be37fa;
  -webkit-text-fill-color: #be37fa;
  -webkit-box-shadow: 0 0 0 500em inset #00ffaa;
  }

  html {
    background-color: rgb(30,30,40);
    width:100%;
    height:100%;
  }
  
  button:focus {
  outline:0;
  box-shadow: 0 0 .5em rgba(90, 225, 125, 1);
  }
`,
};

const TropicalT = ({ Component, pageProps, router }: AppContext & AppInitialProps) => {
  const apolloClient = useApollo(pageProps as { [x: string]: NormalizedCacheObject | undefined });
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <style dangerouslySetInnerHTML={globalStyle} />
        <title />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} router={router} />
      </ApolloProvider>
    </>
  );
};

export default TropicalT;
