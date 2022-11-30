import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import products from "../products";

const HomeScreens = () => {
  return (
    <React.Fragment>
        <h2>Hello from home</h2>
        <Link to='/products' >
        <Button variant="primary">To Product Page</Button>
        </Link>
    </React.Fragment>
  );
};

export default HomeScreens;
