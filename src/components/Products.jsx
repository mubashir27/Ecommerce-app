import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const Products = ({ product }) => {
  return (
    <React.Fragment>
      <Card style={{ width: "18rem", height: "25rem" }} className="mb-3">
        <Link to={`/products/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }} >
        <Card.Body className="d-flex flex-column justify-content-between">
          <div className="">
            <Card.Title as="div" style={{ height: '3rem' }} >{product.name}</Card.Title>
            <Card.Text className='' >
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </Card.Text>
          </div>
          <div className="">
            <Card.Text as="h3" className="mb-auto">
              ${product.price}
            </Card.Text>
          </div>
        </Card.Body>
        </Link>
      </Card>
    </React.Fragment>
  );
};

export default Products;
