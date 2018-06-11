import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const formRegister = {
  border: "1px solid #1abcfe",
  textAlign: "left",
  width: "50%",
  height: "450px",
  marginTop: "100px",
  marginLeft: "25%",
  padding: "20px",
}

const inputForm = {
  background: "transparent",
  width: "100%",
  border: "1px solid #1abcfe",
  color: "white"
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password:""
    };
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.registerForm = this.registerForm.bind(this)
  }

   handleChangeFirstName(event) {
    let value = event.target.value;
    this.setState(() =>{
      return { firstname : value }
    });
   }

   handleChangeLastName(event) {
     let value = event.target.value;
     this.setState(() =>{
       return { lastname : value }
     });
   }

   handleChangeEmail(event) {
     let value = event.target.value;
     this.setState(() => {
       return { email : value }
     });
   }

   handleChangePassword(event) {
     let value = event.target.value;
     this.setState(() => {
       return { password : value }
     });
   }

   registerForm(event) {
     event.preventDefault();
     const firstname = this.state.firstname
     const lastname = this.state.lastname
     const email = this.state.email
     const password = this.state.password
     // save in localStorage
     localStorage.setItem("firstname" , firstname)
     localStorage.setItem("lastname", lastname)
     localStorage.setItem("email", email)
     localStorage.setItem("password", password)
   }

  render(){
    console.log("state", this.state);
    return (
      <Form style={formRegister} onClick={this.registerForm}>
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input
           type="firstname"
           name="firstname"
           id="inputFirstName"
           placeholder="Enter Your First Name"
           style={inputForm}
           value={this.state.firstname}
           onChange={this.handleChangeFirstName} />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input
           type="lastname"
           name="lastname"
           id="inputLastName"
           placeholder="Enter Your Last Name"
           style={inputForm}
           value={this.state.lastname}
           onChange={this.handleChangeLastName} />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
           type="email"
           name="email"
           id="inputEmailLogin"
           placeholder="Enter Your Email"
           style={inputForm}
           value={this.state.email}
           onChange={this.handleChangeEmail}
           />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
          type="password"
          name="password"
          id="inputPasswordLogin"
          placeholder="Enter Your Email Password"
          style={inputForm}
          value={this.state.password}
          onChange={this.handleChangePassword} />
        </FormGroup>
        <Link to="/">
        <Button outline color="danger" block>REGISTER</Button>{' '}
        </Link>
      </Form>
    )
  }
}

export default Register;
