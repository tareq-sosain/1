import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='col-9 mx-auto col-md-12 col-lg-12 my-3 rounded '>
      <Link to={`/product/${product._id}`}>
        <Card.Img className="imgprod" src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className="hlinkBr">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        

        <Card.Text as='div' className="hlinkBr">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
