import React, { useState, Fragment } from 'react';
import {Container,Card,Button,Row,Col} from 'react-bootstrap';
import {BiRupee} from 'react-icons/bi';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartitems from './cartitem';
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './style.css';
function Cart(){
   let history= useNavigate();
   const length = Cartitems.length;
   console.log(length)
  const handleDelete = (id) =>{
    var index=Cartitems.map(function(e){
        return e.id
    }).indexOf(id);
    Cartitems.splice(index,1);
    history('/cart');
  }

  const[item,setItem]=useState("")
  const[price,setPrice]=useState("");
  const handleEdit = (name,image,price) =>{
    localStorage.setItem('Name',name)
    localStorage.setItem('Image',image)
    localStorage.setItem('Price',price)
}

  return(
    <Fragment>
        <div className='cart' style={{marginTop:'100px'}}>
            <h2 className='urcart'>Your Cart - {length} item</h2>
            <h4><BiRupee/>Total price:{item.Price}</h4>
            <Link to={'/buy'}>
                <Button variant="dark" onClick={() => handleEdit(item.name,item.image,item.price)}>Checkout</Button>
            </Link>
            <div className='card-cart'>
                {
                    Cartitems && Cartitems.length > 0
                     ?
                     Cartitems.map((item) =>
                     {
                      // const[price,setPrice]=useState("");
                      // const[total,setTotal]=useState(300);
                      
                        
                    
                
                    
                        
                   
                        return(
                         <div>
                        <Container> 
                        <Card>
                        <Row>
                        <Col>
                              <img src={item.Image} height="200px" width="200px"/>
                        </Col>
                        <Col>
                          <h3>{item.Name}</h3><br/>
                          
                         
                          <h6><BiRupee/>{item.Price}</h6>
                          <Button variant="dark" onClick={() => handleDelete(item.id)}>Delete</Button>
                          </Col>
                         </Row>
                       </Card>
                     </Container>
                    </div>
                    )
                     })
                     :
                     "no data available"
                    }
            </div>
        </div>
    </Fragment>
  )
}
export default Cart;