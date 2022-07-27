import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

// const getStyle = (router: NextRouter, href: string) => ({
//   color: router.pathname === href ? 'rgb(190, 55, 250)' : 'rgba(190, 55, 250, .35)',
// });

type Active = {
  children: JSX.Element;
  router: NextRouter;
  href: string;
};

const ActiveLink = ({ children, router, href }: Active) => {
  // const handleClick: MouseEventHandler = useCallback(
  //   (e) => {
  //     e.preventDefault();
  //     void router.push(href).then(() => window.scrollTo(0, 0));
  //   },
  //   [href, router]
  // );

  return (
    <Link className={router.pathname == href ? 'active' : ''} href={href}>
      {children}
    </Link>
  );
};

export default withRouter(ActiveLink);
