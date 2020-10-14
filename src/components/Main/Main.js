import React from 'react';

import video from '../../video/moon.mp4';

import './main.css'

const Main = () => (
    <section className="main">
        <h1 className="title">
            Falcon 1
        </h1>

        <div className="video-container">
            <video className="video" autoPlay loop muted src={video}/>
        </div>
    </section>
);

export default Main;
