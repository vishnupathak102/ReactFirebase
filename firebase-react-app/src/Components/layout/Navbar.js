
import React from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './signedOutLinks'
import {connect} from 'react-redux';

const Navbar = (props)=>{
  const {auth,profile} = props;
  console.log(auth.uid,"ciejdiefjiejfe")
  const link =   auth.uid ?    <SignedInLinks profile={profile}/> :  <SignedOutLinks/>
    return(
        <nav className ="nav-wrapper grey darken-3">
          <div className="container">
                    <Link to='/' className="brand-logo" >vishnu</Link>
                  {link}

          </div>
        </nav>
    )
}


const mapStateToProps = (state)=>{
    console.log(state,"ckejfiejfe");

    return{
      auth:state.firebase.auth,
      profile:state.firebase.profile
    }
}
export default connect(mapStateToProps)(Navbar);