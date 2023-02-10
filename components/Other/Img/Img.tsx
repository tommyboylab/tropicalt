import React, {CSSProperties} from 'react';
import Image from 'next/image';

type Img = {
    id?: string;
    class: string;
    url?: string;
    alt: string;
    placeholder: string;
    style?: CSSProperties;
    layout?: string;
};

const ImgComp = (Img: Img): JSX.Element => {
    return (
        <Image
            style={{backgroundImage: `url(${process.env.API}/${Img.placeholder})`}}
            id={Img.id}
            className={Img.class}
            src={`${process.env.API}/${String(Img.url)}`}
            loading='lazy'
            alt={Img.alt}
            sizes='100%'
            width={2500}
            height={2500}
        />
    );
};
export default ImgComp;
