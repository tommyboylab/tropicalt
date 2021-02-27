import { NextRouter, withRouter } from 'next/router';
import React, { MouseEventHandler, useCallback } from 'react';

const getStyle = (router: NextRouter, href: string) => ({
  color: router.pathname === href ? 'rgb(190, 55, 250)' : 'rgba(190, 55, 250, .35)',
});

type Active = {
  children: JSX.Element;
  router: NextRouter;
  href: string;
};

const ActiveLink = ({ children, router, href }: Active) => {
  const style = getStyle(router, href);

  const handleClick: MouseEventHandler = useCallback((e) => {
    e.preventDefault();
    router.push(href).then(() => window.scrollTo(0, 0));
  }, []);

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default withRouter(ActiveLink);
