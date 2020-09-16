import React from 'react';
import MyImage from './my-image';
import AboutMe from './about-me';
import Technologies from './technologies';
import Projects from './projects';


const content = () => {
    return (
        <div>
            <MyImage />
            <AboutMe />
            <Technologies/>
            <Projects/>
        </div>

    )
}
export default content