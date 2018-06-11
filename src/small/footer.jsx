import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button,CardImg, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const footerBox = {
  height: "80px",
  width: "100%",

  backgroundColor: "#1abcfe",
  marginTop: "20px",
  paddingTop: "5px",
  textAlign: "center",
}
const imgStyle = {
  height: "30px",
  width: "30px",
  marginLeft: "20px",
  textAlign: "center"
}

class Footer extends Component{
  constructor(){
    super();
      this.state= {
        modal: false,
      };
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render(){
    return(
    <div style={footerBox}>
        <div className="row">
           <div className="col-sm-4">
           <br/>
           <h6> <CardImg src={require(`../assets/maths.png`)} style={imgStyle} alt="Card image cap"/> Calculator-App@2018</h6>
           </div>
           <div className="col-sm-4">
           <h6>Tech Stack :</h6>
           <CardImg src={require(`../assets/html.png`)} style={imgStyle} alt="Card image cap"/>
           <CardImg src={require(`../assets/css.png`)} style={imgStyle} alt="Card image cap"/>
           <CardImg src={require(`../assets/javascript.png`)} style={imgStyle} alt="Card image cap"/>
           <CardImg src={require(`../assets/bootstrap.png`)} style={imgStyle} alt="Card image cap"/>
           <CardImg src={require(`../assets/react.png`)} style={imgStyle} alt="Card image cap"/>
           </div>
           <div className="col-sm-4">
           <h6>Contact Us :</h6>
           <Button outline color="warning" onClick={this.toggle} block>{this.props.buttonLabel} My Contact</Button>{' '}
             <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
               <ModalHeader toggle={this.toggle}>Calculator-App</ModalHeader>
               <ModalBody>
               <Link to="https://github.com/stefanusdody" target="_blank">
               <CardImg src={require(`../assets/github.png`)} style={imgStyle} alt="Card image cap"/>
               </Link>
               <br/>
               <br/>
               <Link to="https://www.linkedin.com/in/stefanus-dody-kristianto-wicaksono-a4a13672/" target="_blank">
               <CardImg src={require(`../assets/linkedin.png`)} style={imgStyle} alt="Card image cap"/>
               </Link>
               <br/>
               <br/>
               <h6><CardImg src={require(`../assets/email.png`)} style={imgStyle} alt="Card image cap"/> : stefanusdody@yahoo.com</h6>
               <br/>
               <h6><CardImg src={require(`../assets/phone.png`)} style={imgStyle} alt="Card image cap"/> : 087882344987</h6>
               <br/>
               <h6><CardImg src={require(`../assets/whatsapp.png`)} style={imgStyle} alt="Card image cap"/> : 087882344987</h6>
               </ModalBody>
             <ModalFooter>
                <Button color="secondary" onClick={this.toggle}>Back</Button>
             </ModalFooter>
             </Modal>

           </div>
        </div>
   </div>
)}
}
export default Footer
