import React from "react";
import { connect } from "react-redux";
import sources from './projectsImages';

const projects = (props) => {

    const projectsDesc = props.content.language.projectsDesc;

    const projectLeftImage = (source, project) => {
        return (
            <div className="grid-container" key={source.id}>
                <img className="grid-div" src={source = source.imgSource} alt={source.id} />
        <div className="grid-div"><h3>{project.description}</h3></div>
            </div>
        )
    }

    const projectRighttImage = (source, project) => {
        return (
            <div key={source.id} className="grid-container">
                <div className="grid-div"><h3>{project.description}</h3></div>
                <img className="grid-div" src={source = source.imgSource} alt={source.id} />
            </div>
        )
    }

    return (
        <div className="full-width-transparent">
            {sources.map((source) => {
                return (
                    source.id%2===0?projectLeftImage(source, projectsDesc[source.id]):projectRighttImage(source,projectsDesc[source.id])
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