import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';
import moment from 'moment'

const ProjectDetails = (props)=>{
    console.log(props,"details");
    const id = props.match.params.id;
    const {project}  = props;

    const {auth} = props;
    if(!auth.uid) return <Redirect to ='/signin'/>

    return(
        <div className="container section project-details">
           <div className="card z-dept-0">
             <div className="card-content">
               <span className="card-title">Project Title: {id}</span>
               <p>{project.content}</p>
             </div>
             <div className="card-action gret lighten-4 grey-text">
                <div>{project.authorLastName}</div>
                <div>{project.authorFirstname}</div>
                <p className="grey-text">{moment(project.createdAt && project.createdAt.toDate()).calendar()}</p>
             </div>
           </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>{
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : {}
  return{
    project:project || {},
    auth:state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'projects'}
  ])
)(ProjectDetails);