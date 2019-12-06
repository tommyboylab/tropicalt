import React from 'react';
const s = require('../Album.scss');

const MainPane = ({ item }) => (
    <div className={s.mainPane}>
        <img src={item} />
    </div>
);

export default MainPane;
