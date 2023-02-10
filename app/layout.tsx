'use client'

import React from 'react';
import '../components/Other/Styles/GlobalStyle.css';
import GraphQlProvider from './GraphQlProvider';
import AnimatePresenceProvider from './AnimatePresenceProvider'
//import AnimateSharedLayoutProvider from "./AnimateSharedLayoutProvider";
import Template from "./template";
import {useTransitionFix, useFoucFix} from "./TempFixForFramer";

type Props = { children: React.ReactNode };

const RootLayout = ({ children }: Props) => {

    useTransitionFix()
    useFoucFix()

  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
      </head>
      <body>
          <GraphQlProvider><Template>{children}</Template></GraphQlProvider>
      </body>
    </html>
  );
};

export default RootLayout;
