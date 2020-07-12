import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import ProjectDetails from './Components/projects/projectDetails';
import SignIn from './Components/auth/SignedIn';
import SignUp from './Components/auth/Signedup';
import CreateProject from './Components/projects/createProject';
import _ from 'lodash'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
         <Route exact path ='/' component = {Dashboard}/>
         <Route path ='/project/:id' component = {ProjectDetails}/>
         <Route path ='/signin' component = {SignIn}/>
         <Route path ='/signup' component = {SignUp}/>
         <Route path ='/create_project' component = {CreateProject}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
