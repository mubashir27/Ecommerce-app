import React from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../../products'
import Rating from '../../components/Rating';

const SpecificProductScreen = ({match}) => {
  const product = products.find(p => p._id === window.location.pathname.split('/')[2])
  console.log('product1',product);
  
  return (
    <React.Fragment>
      <Link className='btn btn-dark my-3' to='/products'>
          Go Back
      </Link>
      <Row>
        <Col md={6} >
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3} >
          <ListGroup variant='flush' >
            <ListGroup.Item   >
              <h2>
                {product.name}
              </h2>
            </ListGroup.Item>
             <ListGroup.Item >
              <Rating
               value={product.rating}
                text={`${product.numReviews} reviews`} />
             </ListGroup.Item>
             <ListGroup.Item >
                Price: ${product.price}
              </ListGroup.Item>
              <ListGroup.Item >
              Description: {product.description}
              </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
        <Card>
          <ListGroup variant='flush' >
              <ListGroup.Item>
                <Row>
                  <Col>
                  Price
                  </Col>
                  <Col>
                    <b>${product.price}</b>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                  Status
                  </Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className='btn-block mx-auto w-100' type='button' disabled={product.countInStock === 0} >
                  Add to Cart
                </Button>
              </ListGroup.Item>
          </ListGroup>
          </Card>
          </Col>
          
      </Row>
    </React.Fragment>
  )
}

export default SpecificProductScreen