import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = ({ authData, logout }) => {
  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
  };

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">LA RONDE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
      </Container>

      <Container className="mx-5">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-center">
            <Nav.Link href="/" className="mx-5">
              Acceuil
            </Nav.Link>

            <Nav.Link href="/set-list-index" className="mx-5">
              PlayList
            </Nav.Link>
            <Nav.Link href="/musician-index" className="mx-5">
              Musiciens
            </Nav.Link>

            {authData.isAuthenticated ? (
              <Fragment>
                <Nav.Link href="/dashboard" className="mx-5">
                  Dashboard
                </Nav.Link>
                <Nav.Link className="mx-5" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Fragment>
            ) : (
              <Fragment>
                <Nav.Link href="/register" className="mx-5">
                  Register
                </Nav.Link>
                <Nav.Link href="/login" className="mx-5">
                  Login
                </Nav.Link>
              </Fragment>
            )}

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
  );
};

export default Navigation;
