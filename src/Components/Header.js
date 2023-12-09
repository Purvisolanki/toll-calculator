import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-dark" style={{backgroundColor:'rgb(290, 201, 6)'}}>
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight:'900', color:'black'}}>TOLL CALC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{fontWeight:'800'}}>
            <Link to={'/'} style={{textDecoration:'none'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>

            <Link to={'/works'} style={{textDecoration:'none'}}>
            <Nav.Link href="#link">How It Works?</Nav.Link>
            </Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header