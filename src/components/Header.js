import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="ml-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/cart">
                <i class="fas fa-shopping-cart"></i>{" "} Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <i class="fas fa-user"></i>{" "}Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
