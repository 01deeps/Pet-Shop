import React,{useEffect,useState} from 'react';
import Checkoutitems from './checkouts';
import {BiRupee} from 'react-icons/bi';
import './style.css';
import { Table, Row, Col, Form, Container, Button } from 'react-bootstrap';
function Buy(){
    const[name,setName]=useState("");
    const[image,setImage]=useState("");
    const[price,setPrice]=useState("");
    const[total,setTotal]=useState("");
    const[category,setCategory]=useState("");
    const[id,setId]=useState("");

    useEffect(() =>{
        setName(localStorage.getItem('Name'))
        setImage(localStorage.getItem('Image'))
        setId(localStorage.getItem('Id'))
        setPrice(localStorage.getItem('Price'))
        setCategory(localStorage.getItem('Category'))
    },[]) 

    return(
        <div className='buy'>
            <Container> 
                <Row>
                  <Col>
                    <Form className='checkout-form'>
                    <h3>Shipping information</h3>
                    <h5>page 1</h5>
                   <Form.Group className="mb-3" controlId="formBasicFirstName">
                   <Form.Control type="text" placeholder="First Name" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicLastName">
                   <Form.Control type="text" placeholder="Last Name" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Control type="text" placeholder="Email" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicAddress">
                   <Form.Control type="text" placeholder="Address" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicCity">
                   <Form.Control type="text" placeholder="City" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicPincode">
                   <Form.Control type="text" placeholder="Pin Code" />
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                   <Form.Control type="text" placeholder="Phone number" />
                   </Form.Group>
                   <Button variant="dark" className="mb-3" type="submit">Continue with payment</Button>
                   </Form>
                  </Col>
                  <Col>      
                  <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>GST</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Checkoutitems && Checkoutitems.length > 0
                      ?
                      Checkoutitems.map((item)=>{
                        return(
                          <tr>
                            <td>
                              {item.Name}
                            </td>
                            <td>
                              {item.Count}
                            </td>
                            <td>
                              {item.Category}
                            </td>
                            <td>
                              {item.Total}
                            </td>
                            <td>18%</td>
                          </tr>
                       )
                      })
                      :
                      "No data available"
                    }
                    </tbody>
                   </Table> 
                      <div className='price'>
                       <p> Price : <BiRupee/></p>
                       <p> GST : <BiRupee/>100</p>
                       <h2> Subtotal : <BiRupee/>{8000+ 100}</h2>
                    </div>
                  </Col> 
                    
          </Row>
        </Container>
        </div>
    )
}
export default Buy;