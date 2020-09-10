import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

import './header-style.css';
import style from './switch-style';


const Header = () => {
    const [state, setState] = useState({
        isEnglish: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = style();

    return (
        <div className="switch-container">
            <Switch
                classes={
                    classes
                }
                checked={state.isEnglish}
                name="isEnglish"
                onChange={handleChange}
                color="primary"
            />
            <div className="language-container">
                <div className="language-label"> <label className={state.isEnglish?'language-label-inactive':'language-label-active'}>Polski</label></div>
                <div className="language-label"><label className={state.isEnglish?'language-label-active':'language-label-inactive'}>English</label></div>
            </div>

        </div>
    )
}

export default Header;