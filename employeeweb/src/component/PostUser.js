import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import './PostUser.css'
import { Navigate } from 'react-router-dom';
function PostUser() {
    const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone:"",
    department:"",
  });
  const handleInputChange=(event)=>{
    const{name,value}=event.target;
    setFormData({
        ...formData,
        [name]:value,
    })
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(formData);
    try{
        const response=await fetch("http://localhost:8080/api/employee",{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(formData)
    });
    const data=await response.JSON();
    console.log("Employee created:",data);
    Navigate("/")
}catch(error){
        console.log("Error creating employee:",error.message);
    }
  }
  return (
     <div className="form-container">
          <h2 className="text-center mb-4">Post New Form</h2>
           <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formbasicname' className='mb-3'>
                <Form.Control
                type='text'
                name='firstName'
                placeholder='Enter your name'
                value={FormData.firstName}
                onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId='formbasicname' className='mb-3'>
                <Form.Control
                type='text'
                name='email'
                placeholder='Enter your email'
                value={FormData.email}
                onChange={handleInputChange}
                />
            </Form.Group>
             <Form.Group controlId='formbasicname' className='mb-3'>
                <Form.Control
                type='text'
                name='phone'
                placeholder='Enter your phone no.'
                value={FormData.phone}
                onChange={handleInputChange}
                />
            </Form.Group>
             <Form.Group controlId='formbasicname' className='mb-4'>
                <Form.Control
                type='text'
                name='department'
                placeholder='Enter your department'
                value={FormData.department}
                onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant='primary' type='submit' className='w-100'>Post Employee</Button>
           </Form>
        </div>
    
  )
}

export default PostUser
