import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <LinkContainer to='/' >
              <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav  
              className="ml-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
          <LinkContainer to='/cart' >
              <Nav.Link >
                <i class="fas fa-shopping-cart"></i>{" "} Cart
              </Nav.Link>
          </LinkContainer>
          <LinkContainer to='/login' >
              <Nav.Link>
                <i class="fas fa-user"></i>{" "}Sign In
              </Nav.Link>
          </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
