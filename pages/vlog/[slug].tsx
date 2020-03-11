import React from 'react';
import VideoPlayer
    from "../../components/Video/VideoPlayer/VideoPlayer";
import s from "../../components/Other/Layout/Vlog.module.scss";

export default function Videos():JSX.Element {
    return <main className={s.layout}><VideoPlayer /></main>;
}
