import React,{useState,useEffect} from 'react';
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './employeedetails';
import {Link,useNavigate} from 'react-router-dom';
import {FiArrowLeftCircle} from "react-icons/fi";

function Editemployee(){
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[id,setId]=useState("");
    const[num,setNum]=useState("");

    let history = useNavigate();

    var index=Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) =>{
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        a.Num = num;

        history("/employee");
    }
    useEffect(() =>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setNum(localStorage.getItem('Num'))
        setId(localStorage.getItem('Id'))
    },[])
    return(
        <div className='employee'>
            <Link to={'/employee'}>
            <FiArrowLeftCircle/>
            </Link>
            <h3>Edit employee</h3>
            <Form className="d-grid gap-2">
                <Form.Group className='mb-3' controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId="formAge">
                    <Form.Control type="text" placeholder="Enter Phone number" value={num} required onChange={(e) => setNum(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button variant="dark" onClick={(e) => handleSubmit(e)} type="submit">update</Button>
            </Form>
        </div>
    )
}
export default Editemployee;