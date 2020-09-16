import React from "react";
import { connect } from "react-redux";
import sources from './projectsImages';
import './style-colors.css';

const projects = (props) => {

    const lang = props.content.language;
    const projectsDesc = props.content.language.projectsDesc;

    const projectLeftImage = (source, project) => {
        return (
            <div className="grid-container" >
                <img className="grid-div" src={source = source.imgSource} alt={source.id} />
                <div className="grid-div text-justyfy" dangerouslySetInnerHTML={{
                    __html: project.description
                }} />
            </div>
        )
    }

    const projectRighttImage = (source, project) => {
        return (
            <div className="grid-container">
                <div className="grid-div text-justyfy" dangerouslySetInnerHTML={{
                    __html: project.description
                }} />
                <img className="grid-div" src={source = source.imgSource} alt={source.id} />
            </div>
        )
    }

    const projectsView = (source, project) => {
        return (
            <div key={source.id}>
                <h2>{project.date}</h2>
                {source.id % 2 === 0 ? projectLeftImage(source, project) : projectRighttImage(source, project)}
                <hr />
            </div>)
    }

    return (
        <div className="full-width-transparent">
            <h1>{lang.projects}</h1>
            <hr />
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