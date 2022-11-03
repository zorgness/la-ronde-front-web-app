import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigation = () => {

  return (

    <Navbar bg="light" expand="lg">

      <Container fluid>
        <Navbar.Brand href="#">LA RONDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>

    <Container className="mx-5">
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="text-center" >
          <Nav.Link href="/" className='mx-5'>Acceuil</Nav.Link>
          <Nav.Link href="/register" className='mx-5'>Register</Nav.Link>
          <Nav.Link href="/login" className='mx-5'>Login</Nav.Link>

          {/* <NavDropdown title="Link"  id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action3" className='mx-5'>Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}

        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation
