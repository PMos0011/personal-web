import React from 'react';
import Switch from '@material-ui/core/Switch';
import { connect } from "react-redux";

import * as actions from '../../store/action';
import './header-style.css';
import style from './switch-style';
import linkedinIcon from '../../images/linkedin.png';
import githubIcon from '../../images/github.png';


const Header = (props) => {

    const classes = style();
    const isEnglish = props.content.isEnglish;

    const linkedIn = {
        backgroundImage: `url(${linkedinIcon})`,
    }

    const github = {
        backgroundImage: `url(${githubIcon})`,
    }


    return (
        <>
            <div className="switch-container">
                <Switch
                    classes={
                        classes
                    }
                    checked={isEnglish}
                    onChange={props.handleChange}
                />
                <div className="language-container">
                    <div className="language-label"><label className={isEnglish ? 'language-label-inactive' : 'language-label-active'}>Polski</label></div>
                    <div className="language-label"><label className={isEnglish ? 'language-label-active' : 'language-label-inactive'}>English</label></div>
                </div>
                <a href="https://www.linkedin.com/in/pawe%C5%82-moskwa-835bab186/"
                    target="_blank"
                    rel="noopener"
                    title="LinkedIn">
                    <div className="icon-div" style={linkedIn} />
                </a>
                <a href="https://github.com/PMos0011"
                    target="blank"
                    rel="noopener"
                    title="GitHub">
                    <div className="icon-div" style={github} />
                </a>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        content: state
    };
}

const mapToDispatchToProps = dispatch => {
    return { handleChange: () => dispatch({ type: actions.CHANGE_LANGUAGE }) }

}

export default connect(mapStateToProps, mapToDispatchToProps)(Header);