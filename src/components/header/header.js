import React from 'react';
import Switch from '@material-ui/core/Switch';
import { connect } from "react-redux";

import * as actions from '../../store/action';
import './header-style.css';
import style from './switch-style';


const Header = (props) => {
    const classes = style();
    const isEnglish = props.content.isEnglish;
    return (
        <div className="switch-container">
            <Switch
                classes={
                    classes
                }
                checked={isEnglish}
                onChange={props.handleChange}
            />
            <div className="language-container">
                <div className="language-label"><label className={ isEnglish ? 'language-label-inactive' : 'language-label-active'}>Polski</label></div>
                <div className="language-label"><label className={isEnglish ? 'language-label-active' : 'language-label-inactive'}>English</label></div>
            </div>
        </div>
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