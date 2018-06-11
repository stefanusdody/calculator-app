import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {
  CardImg,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  const appHeader = {
    backgroundColor: "#1abcfe",
    height: "60px",
    color: "white",
  }

const logoApp = {
  height: "40px",
  width: "40px",
  marginRight: "10px"
}


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={appHeader} light expand="md" className="fixed-top">
          <NavbarBrand>
          <CardImg src={require(`../assets/maths.png`)} style={logoApp}/>
            Calculator-App
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/login">
                    <DropdownItem> Login </DropdownItem>
                  </Link>
                  <Link to="/register">
                    <DropdownItem>Register</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link to="/login">
                  <DropdownItem>Log Out</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header
