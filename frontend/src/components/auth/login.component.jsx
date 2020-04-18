import React from "react";
import { ToastsStore } from 'react-toasts';
import FormatUrl from "../../utils/UrlFormatter";
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          username: null, 
          password: null
        }
    }


    handleLogin = (ev) => {
      ev.preventDefault();
      const { username, password } = this.state;

      if(!username){
        ToastsStore.warning("username required", 3000, "custom-toaster");
        return
      }

      if(!password){
        ToastsStore.warning("password required", 3000, "custom-toaster");
        return
      }


      let url = FormatUrl(`/api/auth/login/`)
      fetch(url, {
      method: 'POST',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          password: password,
          username: username
      })
      })
      .then(response => response.json())
      .then(res => {
        if(res.code === 200){
          localStorage.setItem("company_id", res.company.id)
          localStorage.setItem("company_name", res.company.name)
          localStorage.setItem("company_username", res.company.username)
          localStorage.setItem("auth_token", res.company.token)
          ToastsStore.warning("Login success", 3000, "custom-toaster");
          this.props.history.push("/dashboard")
        } else {
          ToastsStore.warning("Login failed", 3000, "custom-toaster");
        }
      }).catch(err => {
        ToastsStore.warning("Login failed", 3000, "custom-toaster");
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
              <form className="mt-4" onSubmit={this.handleLogin}>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="text" onChange={(e) => this.setState({ username:e.target.value })} className="form-control mb-0"placeholder="Username" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <a href="#" className="float-right">Forgot password?</a>
                  <input type="password" onChange={(e) => this.setState({ password:e.target.value })} className="form-control mb-0" placeholder="Password" />
                </div>
                <div className="d-inline-block w-100">
                  <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                  </div>
                  <button type="submit" className="btn btn-primary float-right">Sign in</button>
                </div>
                <div className="sign-info text-center">
                  <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to="/register" title className="pointer">Sign up</Link></span>
                </div>
              </form>
        )
    }

}


export default Login;