import React from 'react';

// const mybutton = (props: {isActive: boolean}) =>  <button ></button>

const ThumbButton = ({ active, src, setActiveItem, id }) => (
    //@ts-ignore
    <button active={active} onFocus={setActiveItem} onClick={setActiveItem}>
        <img id={id} src={src} />
    </button>
);

export default ThumbButton;
