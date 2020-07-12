
import React from 'react';
import moment from 'moment'

const ProjectSummary = ({project})=>{
    console.log(project,"dejhdiue");
    return(
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.authorFirstname}{project.authorFirstName}</span>
           <span className="card-title">{project.id}</span>
           <p>{project.title}</p>
           <p className="grey-text">{project.content}</p>
           <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
     </div>
    )
}

export default ProjectSummary;