
import React from 'react'
import ProjectSummary from './projectSummary';
import _ from 'lodash'
import {Link} from 'react-router-dom';

const ProjectList = ({projects})=>{
    return(
      <div className="project-list section">
        {
          _.map(projects,val=>(
             <Link to = {`/project/${val.id}`}>
             <ProjectSummary project = {val}/>
             </Link>
          ))
        }
      </div>
    )
}

export default ProjectList;