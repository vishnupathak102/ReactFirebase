
import React , {Component} from 'react';
import {signUp} from '../../store/actions/authActions';
import {connect} from 'react-redux';

class SignUp extends Component{
    state={
     email:"",
     password:"",
     firstName:"",
     lastName:""
    }

    handleSubmit = (e)=>{
      e.preventDefault();
      this.props.signUp(this.state);
    }

    handleChane = (e)=>{
      this.setState({[e.target.id]:e.target.value});
    }


    render(){
        return(
            <div className="container">
               <form onSubmit={this.handleSubmit} className="white">
                 <h5 className="grey-text text-darken-3">Sign Up</h5>
                  <div className='input-field'>
                    <label htmlFor="email">Email</label>
                    <input type = "email" id = "email" onChange={this.handleChane}/>
                  </div>

                  <div className='input-field'>
                    <label htmlFor="password">Password</label>
                    <input type = "password" id = "password" onChange={this.handleChane}/>
                  </div>
                  
                  <div className='input-field'>
                    <label htmlFor="name">First Name</label>
                    <input type = "text" id = "firstName" onChange={this.handleChane}/>
                  </div>

                  <div className='input-field'>
                    <label htmlFor="name">Last Name</label>
                    <input type = "text" id = "lastName" onChange={this.handleChane}/>
                  </div>

                  <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                    <div className='red-text center'>
                     {this.props.authError ? <p>{this.props.authError}</p> : ""}
                    </div>
                  </div>
               </form>
            </div>
        )
    }
}

const mapStatetoProps = (state)=>{
return{
  auth:state.firebase.auth,
  authError:state.auth.authError
}
}


const mapDispatchToProps = (dispatch)=>{
  return{
    signUp:(newUser)=>dispatch(signUp(newUser))
  }
}

export default connect(mapStatetoProps,mapDispatchToProps) (SignUp);