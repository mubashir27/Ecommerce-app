import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from '../components/Products'
import products from '../products'

const ProductScreen = () => {
  return (
     <Row>
        {products.map((m) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Products product={m} />
          </Col>
        ))}
      </Row>
  )
}

export default ProductScreen