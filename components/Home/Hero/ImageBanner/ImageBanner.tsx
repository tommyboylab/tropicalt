import React, { useState, useEffect } from 'react';
const s = require('../Hero.scss');
const ImageB = ({ heroes }: { heroes: any[] }) => {
    const [currHero, setCurrHero] = useState(0);

    const nextHero = () => {
        setCurrHero(currHero => {
            return currHero === heroes.length - 1 ? 0 : currHero + 1;
        });
    };
    useEffect(() => {
        const clear = setTimeout(nextHero, 3000);
        return () => {
            clearTimeout(clear);
        };
    });

    if (!Array.isArray(heroes) || heroes.length <= 0) {
        return null;
    }

    const imgB = heroes[currHero];

    return (
        <div className={s.imageBanner} key={imgB.id}>
            <h1>{imgB.title}</h1>
            <img src={`https://api.tropicalt.ca${imgB.cover.url}`} alt={`Image for ${imgB.title}`} />
        </div>
    );
};
export default ImageB;
