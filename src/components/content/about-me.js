import React from "react";
import { connect } from "react-redux";
import "./about-me-style.css";

const aboutMe = (props) => {
    const cont = props.content.language;
    return (
        <div className="about-me-content">
            <hr />
            <div className="hello-div">
                <h1>{cont.sayHello}<br />{cont.iAm}</h1>
                <div className="strips-div">
                    <div className="strip-left" />
                    <div className="strip-right" />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state
    };
}

export default connect(mapStateToProps)(aboutMe);