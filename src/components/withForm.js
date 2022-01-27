import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const withForm = Component => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        login: "",
        email: "",
        password: "",
      }
      this.submit = this.submit.bind(this);
    } 

    submit(e){
      e.preventDefault();
      if (this.props.submit) {
        this.props.submit(this.state);
      }
      // console.log(this.state)
    };
    
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    render() {
      return <Component {...this.state} {...this.props} submit={this.submit} handleChange={this.handleChange}/>
    }
  }
}

export const RegisterContainer = withForm(RegisterForm);
export const LoginContainer = withForm(LoginForm);