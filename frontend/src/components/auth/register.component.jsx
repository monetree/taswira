import React from "react";
import { ToastsStore } from 'react-toasts';
import FormatUrl from "../../utils/UrlFormatter";
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          email: null,
          name: null,
          username: null,
          password: null,
          confirm_password: null,
          terms: null
        }
    }

    handleRegister = (ev) => {
      ev.preventDefault();
      const { email, name, username, password, confirm_password, terms } = this.state;
      if(!email){
        ToastsStore.warning("email required", 3000, "custom-toaster");
        return
      }

      if(!name){
        ToastsStore.warning("name required", 3000, "custom-toaster");
        return
      }

      if(!username){
        ToastsStore.warning("username required", 3000, "custom-toaster");
        return
      }

      if(!password){
        ToastsStore.warning("password required", 3000, "custom-toaster");
        return
      }

      if(!confirm_password){
        ToastsStore.warning("confirm_password required", 3000, "custom-toaster");
        return
      }

      if(password !== confirm_password){
        ToastsStore.warning("password should match", 3000, "custom-toaster");
        return
      }


      let url = FormatUrl(`/api/auth/register/`)
      fetch(url, {
      method: 'POST',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          email: email,
          name: name,
          password: password,
          username: username
      })
      })
      .then(response => response.json())
      .then(res => {
        if(res.code === 200){
          ToastsStore.warning("Membership created", 3000, "custom-toaster");
          this.props.history.push("/")
        } else {
          ToastsStore.warning("Failed to register", 3000, "custom-toaster");
        }
      }).catch(err => {
        ToastsStore.warning("Failed to register", 3000, "custom-toaster");
      })
    }


    componentDidMount(){
      const auth_token = localStorage.getItem("auth_token")
      if(auth_token){
        this.props.history.push("/dashboard")
      }
    }

    
    render(){
        return (
            <form className="mt-4" onSubmit={this.handleRegister}>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" onChange={(e) => this.setState({email: e.target.value})} className="form-control mb-0" placeholder="Email" />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" onChange={(e) => this.setState({name: e.target.value})} className="form-control mb-0" placeholder="Company name" />
              </div>
              <div className="form-group">
                <label>Username</label>
                <input type="text" onChange={(e) => this.setState({username: e.target.value})}  className="form-control mb-0" placeholder="Username" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={(e) => this.setState({password: e.target.value})} className="form-control mb-0" placeholder="Password" />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" onChange={(e) => this.setState({confirm_password: e.target.value})} className="form-control mb-0" placeholder="Retype password" />
              </div>
              <div className="d-inline-block w-100">
                <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={(e) => this.setState({terms: e.target.value})} />
                  <label className="custom-control-label" htmlFor="customCheck1">I accept <a >Terms and Conditions</a></label>
                </div>
                <button type="submit" className="btn btn-primary float-right">Sign Up</button>
              </div>
              <div className="sign-info text-center">
                <span className="dark-color d-inline-block line-height-2">Already Have Account ? <Link title className="pointer" to="/">Log In</Link></span>
              </div>
            </form>
        )
    }

}


export default Register;