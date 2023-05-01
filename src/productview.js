import React,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Checkoutitems from './checkouts';
import {BiRupee} from 'react-icons/bi';
import {v4 as uuid} from "uuid";
import { Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'
import Cartitems from './cartitem';

function Productview(){
    const[count,setCount] = useState(0);
    const[name,setName]=useState("");
    const[image,setImage]=useState("");
    const[price,setPrice]=useState("");
    const[total,setTotal]=useState(0);
    const[category,setCategory]=useState("");
    let history = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a=name;
        let b=image;
        let c=price;
        let d=count;
        let f=category;
        let g=total;

        Cartitems.push({id: uniqueId, Name: a, Image: b, Price: c,Count: d, Category: f,Total: g})
        history("/cart")
    }

    const handleEdit = (e) =>{
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a=name;
        let b=image;
        let c=price;
        let d=count;
        let f=category;
        let g=total;

        Checkoutitems.push({id: uniqueId, Name: a, Image: b, Price: c, Count: d, Category: f,Total: g})
        history("/buy")
    }
    const decrease = (count) =>{
        setCount(count-1)
        setTotal(total-price)
    }

    const increase = (count) =>{
        setCount(count+1)
        setTotal(total+8000)
    }

    useEffect(() =>{
        setName(localStorage.getItem('Name'))
        setImage(localStorage.getItem('Image'))
        setPrice(localStorage.getItem('Price'))
        setCategory(localStorage.getItem('Category'))
    },[])
    console.log(count)
    console.log(price)
    return(
        <div style={{marginTop:'100px'}}>
            <Row>
                <Col>
                    <img src={image} height='450px' width='400px' className='productimg'></img>
                </Col>
                <Col>
                <div className='productdetail'>
                    <h2>{name}</h2>
                    <h5><BiRupee/>{total}</h5><br/><br/>
                    <h6>Quantity</h6>
                    <Button variant="dark" onClick={()=>decrease(count,price)} disabled={count === 0}>-</Button>
                    <input type="number" value={count} />
                    <Button variant="dark" onClick={()=>increase(count,price)} disabled={count === 50}>+</Button><br/><br/>
                    <Button variant="dark" onClick={(e) => handleSubmit(e)}>Add to cart</Button>  
                    <Link to={'/buy'}>
                        <Button variant="dark" onClick={(e) => handleEdit(e)}>Checkout</Button>
                    </Link><br/><br/>
                </div>
                </Col>
            </Row>
        </div>
    )
}
export default Productview;