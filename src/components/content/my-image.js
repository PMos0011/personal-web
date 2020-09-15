import React from 'react';
import "./my-image-style.css";

import Fade from 'react-reveal/Fade';

const myImage = () => {
    return (

        <div className="my-image-container">
            <div className="backgroound-image-container" />
            <div className="my-image-margin">
                <Fade bottom duration={1500}>
                    <div className="external-radius-div" />
                    <div className="internal-radius-div" />
                    <div className="my-image-div" />
                </Fade>
            </div>
        </div>
    )
}

export default myImage;