
import React , {Component} from 'react';
import {connect} from 'react-redux';
import {SignIn} from '../../store/actions/authActions';


class SignIN extends Component{
    state={
     email:"",
     password:""
    }

    handleSubmit = (e)=>{
      e.preventDefault();
     this.props.SignIn(this.state);
    }

    handleChane = (e)=>{
      this.setState({[e.target.id]:e.target.value});
    }


    render(){
        return(
            <div className="container">
               <form onSubmit={this.handleSubmit} className="white">
                 <h5 className="grey-text text-darken-3">Sign In</h5>
                  <div className='input-field'>
                    <label htmlFor="email">Email</label>
                    <input type = "email" id = "email" onChange={this.handleChane}/>
                  </div>

                  <div className='input-field'>
                    <label htmlFor="password">Password</label>
                    <input type = "password" id = "password" onChange={this.handleChane}/>
                  </div>
                  <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className='red-text center'>
                       {this.props.signIn ? <p>Login Failed</p> : ""}
                    </div>
                  </div>
               </form>
            </div>
        )
    }
}



const mapStateToProps = (state)=>{
  console.log(state,"ckejfiejfe");

  return{
    signIn:state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    SignIn:(credentials)=>dispatch(SignIn(credentials))
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignIN);