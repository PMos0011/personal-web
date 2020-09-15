import React from "react";
import { connect } from "react-redux";
import "./about-me-style.css";

import Fade from 'react-reveal/Fade';

const aboutMe = (props) => {

    const cont = props.content.language;

    return (
        <>
            <div className="about-me-content">
               <Fade delay={1000}> <hr /> </Fade>
                <div id="hello" className="hello-div">
                    <Fade bottom big><>
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
                <Fade spy={props.content.language}>
                    <div className="about-me">
                    <Fade left big appear={true} duration={2000}><h2>{cont._1Para}</h2></Fade>
                    <Fade right big appear={true} duration={2000}><h2>{cont._2Para}</h2></Fade>
                    </div>
                </Fade>
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