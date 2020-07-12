
import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedOutlinks = ()=>{

    return(
        <ul className="right">
           <li><NavLink to= './signup' >Sign Up</NavLink></li>
           <li><NavLink to= './signin' >Login</NavLink></li>
           {/* <li><NavLink to= './' className="btn btn-floating pink lighten-1">VP</NavLink></li> */}
        </ul>
    )
}

export default SignedOutlinks;