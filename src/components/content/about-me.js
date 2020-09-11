import React from "react";
import { connect } from "react-redux";
import "./about-me-style.css";

import Fade from 'react-reveal/Fade';

const aboutMe = (props) => {

    const cont = props.content.language;

    return (
        <>
            <div className="about-me-content">
                <hr />
                <div id="hello" className="hello-div">
                    <Fade><>
                        <Fade spy={props.content.language}>
                            <h1>{cont.sayHello}<br />{cont.iAm}</h1>
                            <div className="strips-div">
                                <div className="strip-left" />
                                <div className="strip-right" />
                            </div>
                        </Fade>
                    </></Fade>
                </div>
            </div>
            <div className="about-me-card">
                <div className="about-me"><h2> </h2></div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        content: state
    };
}

export default connect(mapStateToProps)(aboutMe);