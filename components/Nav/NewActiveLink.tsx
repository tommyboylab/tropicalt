import React, {MouseEventHandler, useCallback} from 'react';
import {NextRouter, useRouter, withRouter} from "next/router";

type Active = {
    children: JSX.Element;
    router: NextRouter;
    href: string;
    className:string;
};

const ActiveLink = ({children, router, href, className}: Active) => {

    const {asPath} = useRouter()

    const handleClick: MouseEventHandler = useCallback((e) => {
        e.preventDefault();
        router.push(href).then(() => window.scrollTo(0, 0));
    }, []);


    const isActive = asPath === href
    // const opacity = isActive ? `1` : '.7'
    // const height = isActive ? '2.5rem' : '2rem'
    // const grow = isActive ? 1.5 : 1

    //style={{opacity:opacity, height:height, flexGrow:grow}}
    return(
        <a href={href} className={isActive? `${className} active` : className} onClick={handleClick}>
    {children}
        </a>
    )


};

export default withRouter(ActiveLink);
