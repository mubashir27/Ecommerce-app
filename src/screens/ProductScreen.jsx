import React from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { productAPI } from '../server/ProductAPI'
import Products from '../components/Products'


const ProductScreen = () => {
  const [product, setProduct] = React.useState([])
  React.useEffect(() => {
    productAPI().then((response) => { 
      console.log('data1x ',response, productAPI())
        setProduct(response?.data)
      })
     .catch((err) => console.log("error",err))
  }, [])


  return (
     <Row>
        {product.map((m) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Products product={m} />
          </Col>
        ))}
      </Row>
  )
}

export default ProductScreen