import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Products from '../components/Products'
import products from '../products'


const HomeScreens = () => {
  return (
    <React.Fragment>
    <Row>
        {
            products.map((m) => (
                <Col sm={12}  md={6} lg={4} xl={3}>
                <Products product={m} />
                </Col>
            )) 
        }
    </Row>
    </React.Fragment>
    )
}

export default HomeScreens