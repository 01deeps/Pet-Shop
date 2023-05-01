import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
const Log = () => { 
  const  User = (event) =>{
    event.preventDefault()
    let formData = {
      email: event.target[0].value,
      password: event.target[1].value
    }
    console.log(formData)
  }
    return ( 
    <div className='login'>
     <center>
      <Form className='container-form' onSubmit={User}>
        <h4 className="mb-3"><b>Login</b></h4> <br/>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Control type="username" className="username" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" className="pass" placeholder="Password" />
        </Form.Group>
        <Button variant="dark" className="mb-3" type="submit">Submit</Button>
        <br/>
        <a href="/register">Create account</a>
        <br/>
        <a href="/">Back to home</a>
     </Form>
    </center>
    </div>
  );
}
 
export default Log;