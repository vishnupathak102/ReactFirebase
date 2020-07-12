
import React , {Component} from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/projectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose}  from 'redux';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component{



    render(){
        const {project,auth} = this.props;
        if(!auth.uid) return <Redirect to ='/signin'/>
        console.log(this.props,"ckejfdiejfie");
        const {projects}  = this.props
        return(
            <div className="dashboard container">
               <div className="row">
                   <div className="col s12 m6">
                       <ProjectList projects = {projects} />
                   </div>
                   <div className ="col s12 m5 offset-m1">
                       <Notifications/>
                   </div>
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state,"edededde");
  return {
      projects:state.firestore.ordered.projects,
      auth:state.firebase.auth
  }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"projects"},
        {collection:"project"}
    ])
    )(Dashboard);

