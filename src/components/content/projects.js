import React from "react";
import { connect } from "react-redux";
import sources from './projectsImages';
import './style-colors.css';

import Fade from 'react-reveal/Fade';

const projects = (props) => {

    const lang = props.content.language;
    const projectsDesc = props.content.language.projectsDesc;

    const projectLeftImage = (source, project) => {
        return (
            <div className="grid-container" >
                <img className="grid-div" src={source = source.imgSource} alt={source.id} />
                <Fade spy={props.content.language}><div className="grid-div text-justyfy" dangerouslySetInnerHTML={{
                    __html: project.description
                }} /></Fade>
            </div>
        )
    }

    const projectRighttImage = (source, project) => {
        return (
            <div className="grid-container">
                <Fade spy={props.content.language}><div className="grid-div text-justyfy" dangerouslySetInnerHTML={{
                    __html: project.description
                }} /></Fade>
                <img className="grid-div" src={source = source.imgSource} alt={source.id} />
            </div>
        )
    }

    const projectsView = (source, project) => {
        return (
            <div key={source.id}>
                <Fade apear={true} delay={500}><div>
                <Fade spy={props.content.language}> <h2>{project.date}</h2></Fade>
                    {source.id % 2 === 0 ? projectLeftImage(source, project) : projectRighttImage(source, project)}
                </div></Fade>
                <Fade big left apear={true}> <hr /> </Fade>
            </div>)
    }

    return (
        <div className="full-width-transparent">
            <Fade apear={true} duration={1000} delay={500}><h1>{lang.projects}</h1></Fade>
            <Fade big left apear={true}><hr /></Fade>
            {sources.map((source) => {
                return (
                    projectsView(source, projectsDesc[source.id])
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        content: state
    };
}

export default connect(mapStateToProps)(projects);