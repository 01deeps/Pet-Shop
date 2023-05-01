import React, { Fragment } from 'react';
import dogproducts from './dogproduct';
import { Link } from 'react-router-dom';
import {BiRupee} from 'react-icons/bi';
import { Card,Button, Container, Row, Col } from 'react-bootstrap';
import './style.css';
const  Dog= () => {
   const handleEdit = (id, name,image) =>{
    localStorage.setItem('Name',name)
    localStorage.setItem('Image',image)
    localStorage.setItem('Id',id)
   }
    return ( 
      <Fragment>
      <div>
      <center><h2>Products</h2></center>
          <div className="colour">
              {
                  dogproducts && dogproducts.length > 0
                  ?
                  dogproducts.map((item)=>{
                      return(
                          <Row>
                          <Col>
                           <Container> 
                          <Card style={{ width: '20rem' }}>
                              <Card.Img variant="top" width="80px" height="250px" src={item.Image} Fixed/>
                          <Card.Body>
                          <center>
                          <Card.Title>{item.Name}</Card.Title>
                          <Card.Text>
                          <h2><BiRupee/>{item.Price}</h2>
                              <Link to={'/productview'}>
                              <Button variant="dark" onClick={() => handleEdit(item.id, item.Name,item.Image, item.Price)}>Buy now</Button>
                              </Link>
                              {/* <Link to={'/cart'}>
                              <Button variant="dark" onClick={() => handleEdit(item.id, item.Name,item.Image, item.Price)}>Add to cart</Button>
                              </Link> */}
                          </Card.Text>
                          </center>
                          </Card.Body>
                          </Card>
                          </Container>
                          </Col>
                          </Row>
                      )
                  })
                  :
                  "No data available"
              }
          </div>
      </div>
      </Fragment>
    )
}
export default Dog   