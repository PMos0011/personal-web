import React from "react";
import './style-colors.css'

import Fade from 'react-reveal/Fade';

import { connect } from "react-redux";

const technologies = (props) => {

    const lang = props.content.language;

    return (
        <div className="full-width-transparent">
            <Fade delay={900}><div>
                <Fade spy={props.content.language}><h1>{lang.techno}</h1></Fade>
            </div></Fade>
            <Fade left big appear={true}><hr className="hr-no-margin" /></Fade>
            <div className="full-width-transparent grid-container">
                <Fade bottom appear={true}>
                    <div className="grid-div right-border-white">
                        <Fade left duration={400} delay={1000}><h2>Back-end</h2></Fade>
                    </div></Fade>
                <Fade bottom big appear={true}><div className="grid-div text-align-left">
                    <Fade right duration={400} delay={1000}> <h3>
                        Java<br />
                        Spring Boot<br />
                        JUnit<br />
                        SQL<br />
                    </h3></Fade>
                </div>
                </Fade>
            </div>
            <Fade left big appear={true}><hr className="hr-no-margin" /></Fade>
            <div className="full-width-transparent grid-container">
                <Fade bottom appear={true}>
                    <div className="grid-div right-border-white">
                        <Fade left duration={400} delay={1000}>
                            <h2>Front-end</h2>
                        </Fade>
                    </div>
                </Fade>
                <Fade bottom big appear={true}><div className="grid-div text-align-left">
                    <Fade right duration={400} delay={1000}> <h3>
                        JavaScript<br />
                        React<br />
                        Redux<br />
                        CSS<br />
                    </h3>
                    </Fade>
                </div>
                </Fade>
            </div>
            <Fade left big appear={true}><hr className="hr-no-margin" /></Fade>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state
    };
}

export default connect(mapStateToProps)(technologies);