import React,{Fragment} from 'react';
import Products from'./catfoods';
import { Link } from 'react-router-dom';
import {Row,Col,Container,Card,Button} from 'react-bootstrap';
import { BiRupee } from 'react-icons/bi';
function Cfood(){
    const handleEdit = (id, name,image) =>{
        localStorage.setItem('Name',name)
        localStorage.setItem('Image',image)
        localStorage.setItem('Id',id)
      }
    return(
        <Fragment>
        <div>
        <center><h2>Products</h2></center>
            <div className="colour">
                {
                    Products && Products.length > 0
                    ?
                    Products.map((item)=>{
                        return(
                            <Row>
                            <Col>
                             <Container> 
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" width="60px" height="250px" src={item.Image} Fixed/>
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
export default Cfood;