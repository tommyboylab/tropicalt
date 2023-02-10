import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

type Active = {
  children: JSX.Element;
  router: NextRouter;
  href: string;
};

const ActiveLink = ({ children, router, href }: Active) => {
  return (
    <Link className={router.pathname == href ? 'active' : ''} href={href}>
      {children}
    </Link>
  );
};

export default withRouter(ActiveLink);
