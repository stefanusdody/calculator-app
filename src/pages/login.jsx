import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const formLogin = {
  border: "1px solid #1abcfe",
  textAlign: "left",
  width: "50%",
  height: "380px",
  marginTop: "80px",
  marginLeft: "25%",
  padding: "20px",

}

const inputLogin = {
  background: "transparent",
  width: "100%",
  border: "1px solid #1abcfe",
  color: "white"
}

const regisStyle = {
  textAlign: "center"
}

class Login extends Component {
  constructor(){
    super();
      this.state= {
        email: "",
        password: "",
        modal: false,
        // isValidPassword: true
      };
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.toggle = this.toggle.bind(this);
      this.submitForm = this.submitForm.bind(this);
  }

  handleChangeEmail(event) {
    let value = event.target.value;
    this.setState(() => {
      return { email : value };
    });
  }

  handleChangePassword(event) {
    let value = event.target.value;
    this.setState(() => {
      return { password : value }
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  submitForm(event){
  event.preventDefault();
  const email = this.state.email
  const password = this.state.password
  if( email  === localStorage.getItem("email") && password === localStorage.getItem("password") )
    {
      this.props.history.push(`/calculator`);
    }
    else{
      alert(
         "Your Username and Password Not Match..Please Check Again or Your must REGISTER first if you don't Have Account"
        )
    }
  }


  render(){
     // console.log("state", this.state);
    return (

     <Form style={formLogin} onSubmit={this.submitForm}>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="inputEmailLogin"
            placeholder="Enter Your Email"
            style={inputLogin}
            value={this.state.email}
            onChange={this.handleChangeEmail}/>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="inputPasswordLogin"
            placeholder="Enter Your Email Password"
            style={inputLogin}
            value={this.state.password}
            onChange={this.handleChangePassword}/>
        </FormGroup>
        <FormGroup>
          <Button outline color="warning" onSubmit={this.submitForm} block>{this.props.buttonLabel} LOGIN</Button>{' '}
        </FormGroup>
          <p style={regisStyle}>-- Not Registered ? --</p>
          <Link to="/register">
          <Button outline color="danger" block>REGISTER</Button>{' '}
          </Link>
      </Form>
    )
  }
}

export default Login;
