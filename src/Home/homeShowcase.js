import React from 'react';
import CreateProjects from "../Projects/createProjects"


const mainPArr = [0,9,2,3]

function Projects(props) {
    return (
        <div>  <h1 style={props.modeStyle} className="projectsHeader">Favorite Projects</h1>
        <div id="projects" style={props.modeStyle}>
          
            <div className="grid">
                {CreateProjects(mainPArr)}
            </div>
        </div>
        </div>
    )
}

export default Projects