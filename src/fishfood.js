import React,{Fragment} from 'react';
import Products from'./fishfoods';
import { Link } from 'react-router-dom';
import {BiRupee} from 'react-icons/bi';
import {Row,Col,Container,Card,Button} from 'react-bootstrap';
function Fish(){
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
                                <Card.Img variant="top" width="55px" height="280px" src={item.Image} Fixed/>
                            <Card.Body>
                            <center>
                            <Card.Title>{item.Name}</Card.Title>
                            <Card.Text>
                            <h2><BiRupee/>{item.Price}</h2>
                                <Link to={'/productview'}>
                                <Button variant="dark" onClick={() => handleEdit(item.id, item.Name,item.Image)}>Buy now</Button>
                                </Link>
                                {/* <Link to={'/cart'}>
                                <Button variant="dark" onClick={() => handleEdit(item.id, item.Name,item.Image)}>Add to cart</Button>
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
export default Fish;