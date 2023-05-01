import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';
function Addproducts(){
  const[title,setTitle] = useState("");
  const[iamgeUrl,setImageUrl] = useState("");
  const[price,setPrice] = useState("");
  const[rating,setRating] = useState("");
  return(
    <div className='employee'> 
        <Form className="d-grid gap-2">
          <h2>Add Products</h2>
        <br/>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Control type="text" value={title} className="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Control type="text" value={imageUrl} className="imageurl" placeholder="imageurl" onChange={(e) => setImageUrl(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Control type="text" value={price} className="price" placeholder="price" onChange={(e) => setPrice(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRating" onChange={(e) => setRating(e.target.value)}>
          <Form.Control type="text" value={rating} className="rating" placeholder="ratings" />
        </Form.Group>
        <Button variant="dark" className="mb-3" type="submit">Submit</Button>
        <br/>
     </Form>        
    </div>
  )
}
export default Addproducts;