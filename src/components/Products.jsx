import React from 'react'
import {Card} from 'react-bootstrap'
const Products = ({product}) => {
  return (
    <React.Fragment>
    <Card style={{ width: '18rem', height: '25rem' }} className='mb-3' >
        <a href={`/product/${product._id}`}>            
      <Card.Img variant="top" src={product.image} />
        </a>
      <Card.Body className='d-flex flex-column justify-content-between' >
        <div className="">
        <Card.Title as='div' >{product.name}</Card.Title>
        <Card.Text>
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
        </div>
        <div className="">
        <Card.Text as='h3' className='mb-auto' >
            ${product.price}
        </Card.Text>
        </div>
      </Card.Body>
    </Card>
    </React.Fragment>
  )
}

export default Products