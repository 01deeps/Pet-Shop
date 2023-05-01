import React,{useState} from 'react';
import {BsCart3} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Form,Nav,Navbar,NavDropdown,Button,Offcanvas } from 'react-bootstrap';
const Bar = () => {
  // const[show,setShow]=useState(false)
  // const handleShow = () => {
  //   setShow(true)
  // } 
  // const handleClose = () => {
  //    setShow(false)
  // }
  return ( 
    <div>
      <Navbar fixed="top" style={{backgroundColor:'white',color:'blue'}}>
      <Container fluid>
        <Navbar.Brand href="/" style={{color:'blue',fontSize:'28px'}}><b>Pet Store</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            defaultActiveKey="/home"
          >
            <Nav.Link href="/" style={{color:'blue'}}><b>Home</b></Nav.Link>
            <NavDropdown title="Pets" style={{color:'blue'}} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/whitefabric" style={{color:'blue'}}>Dog</NavDropdown.Item>
              <NavDropdown.Item href="/colour" style={{color:'blue'}}>
                Cat
              </NavDropdown.Item>
              <NavDropdown.Item href="/printed" style={{color:'blue'}}>
                Fish
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pet Products" style={{color:'blue'}} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/dogfood" style={{color:'blue'}}>Dog</NavDropdown.Item>
              <NavDropdown.Item href="/catfood" style={{color:'blue'}}>
                Cat
              </NavDropdown.Item>
              <NavDropdown.Item href="/fishfood" style={{color:'blue'}}>
                Fish
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" style={{color:'blue'}}><b>About</b></Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="light" className='me-4' style={{color:'blue'}}><b>Search</b></Button>
          </Form> */}
          <Nav>
          <Nav.Link href="/admin" style={{color:'blue'}}><b>Adminlogin</b></Nav.Link>
          <Nav.Link href="/login" style={{color:'blue'}}><b>Login</b></Nav.Link>
          <Nav.Link href="/register" style={{color:'blue'}}><b>Register</b></Nav.Link>
          </Nav>
          <Nav>
             <Button variant="light" href="/cart"><BsCart3/></Button>
          {/* <Offcanvas placement='end' scroll='boolean' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title><b>Cart</b></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Your cart is empty now
            </Offcanvas.Body>
          </Offcanvas> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   );
}
 
export default Bar;