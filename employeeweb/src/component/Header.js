import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import  './Header.css'

function Header() {
  return (
     <Navbar bg="primary" variant='dark' expand="md">
        <Container>
            <Navbar.Brand href="/"><strong>Employee Management System</strong></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className='nav-link'>Employee</Nav.Link>
             <Nav.Link as={Link} to="/employee" className='nav-link'>Post Employee</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

  )
}

export default Header
