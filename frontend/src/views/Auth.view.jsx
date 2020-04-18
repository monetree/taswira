import React from "react";
import Register from "../components/auth/register.component";
import Login from "../components/auth/login.component";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { Switch, Route } from 'react-router-dom';


class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          form:"login"
        }
    }

    handleForm = (form) => {
      this.setState({
        form: form
      })
    }

    handleRegisterSuccess = () => {
      this.setState({
        form: "login"
      })
    }

    handleLoginSuccess = () => {
      this.props.history.push("/dashboard")
    }

    render(){
      const { form } = this.state;
        return (
        <section className="sign-in-page">
            <div className="container p-0">
              <div className="row no-gutters">
                <div className="col-sm-12 align-self-center">
                <div className="sign-in-from bg-white">
                  <h1 className="mb-0 text-center">{form === "login" ? "Log in" : "Create Membership" }</h1>
                  <p className="text-center">Enter your details to access dashboard.</p>
                    {/* {
                      form === "login" ?
                      <Login handleForm={this.handleForm} handleLoginSuccess={this.handleLoginSuccess} /> :
                      <Register handleForm={this.handleForm} handleRegisterSuccess={this.handleRegisterSuccess} />
                    } */}
                  <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/register' component={Register} />
                  </Switch>
                  
                  </div>
                </div>
              </div>
            </div>
            <ToastsContainer store={ToastsStore} />
          </section>
        )
    }

}


export default Auth;