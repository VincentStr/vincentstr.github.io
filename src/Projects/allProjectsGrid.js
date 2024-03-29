import React from "react"
import CreateProjects from "./createProjects"
import "./allProjectsGridStyle.css"


const listProjects = [0,1,2,3,4,5,9,6,7,8]

function AllProjectsGrid(props) {
    return (
        <div> <h1 style={props.modeStyle} className="allprojectsHeader">Projects</h1>
        <div id="allProjects" style={props.modeStyle}>
          
            <div className="projectGrid">
                {CreateProjects(listProjects)}
            </div>
        </div>
        </div>
    )
}

export default AllProjectsGrid