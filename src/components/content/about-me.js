import React from "react";
import { connect } from "react-redux";
import "./about-me-style.css";
import "./style-colors.css";

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const aboutMe = (props) => {

    const lang = props.content.language;

    return (
        <>
            <div className="width-70-transparent" style={{marginTop:'43vh'}}>
               <Zoom delay={1000}> <hr className="hr-70" /> </Zoom>
                <div id="hello" className="hello-div">
                    <Fade bottom big><>
                        <Fade spy={props.content.language}>
                            <h2>{lang.sayHello}<br />{lang.iAm}</h2>
                            <div className="strips-div">
                                <div className="strip-left" />
                                <div className="strip-right" />
                            </div>
                        </Fade>
                    </></Fade>
                </div>
            </div>
            <div className="white-background-black-text padding-bottom padding-top">
                <Fade spy={props.content.language}>
                    <div className="half-width-justify">
                    <Fade left big appear={true} duration={1500}><h3>{lang._1Para}</h3></Fade>
                    <Fade right big appear={true} duration={1500}><h3 className="padding-top">{lang._2Para}</h3></Fade>
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