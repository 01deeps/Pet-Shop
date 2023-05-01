import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
const Reg = () => {
  const createUser = (event) =>{
    event.preventDefault()
    let formData = {
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      confirmpassword: event.target[4].value,
    }
    console.log(formData)
  } 
    return ( 
        <div className='register'>
        <center>
        <Form className='container-form' onSubmit={createUser}>
      <Form.Group className="mb-3" controlId="formBasicFirstname">
      <h4 className="mb-3"><b>Signup</b></h4> <br/>
        <Form.Control type="text" className="acc" placeholder="Firstname" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastname">
      <Form.Control type="text" className="acc" placeholder="Lastname" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicMobile number">
      <Form.Control type="text" className="mobile number" placeholder="Mobile number" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAddress">
      <Form.Control type="text" className="address" placeholder="Address" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" className="email" placeholder="Email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" className="pass" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" className="pass" placeholder="ConfirmPassword" required/>
      </Form.Group>
      <Button variant="dark" className="mb-3" type="submit">Submit</Button>
      <br/>
      <a href="/login">Back to login</a>
    </Form>
    </center>
    </div>
  );
}
 
export default Reg;