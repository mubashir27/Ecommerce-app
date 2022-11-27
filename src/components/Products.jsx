import React from 'react'
import {Card} from 'react-bootstrap'
const Products = ({product}) => {
  return (
    <React.Fragment>
        {/* <div>
            <img src={product.image} alt="" />
        </div> */}
    <Card style={{ width: '18rem' }}>
        <a href={`/product/${product._id}`}>            
      <Card.Img variant="top" src={product.image} />
        </a>

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
        <Card.Text as='h3' >
            ${product.price}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
 
    </React.Fragment>
  )
}

export default Products