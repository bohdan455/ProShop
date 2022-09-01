import React, {useEffect, useState}from "react";
import axios from "axios";
import Rating from "../components/Rating";
import { Row, Col, Card, Image, ListGroup, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() =>{
    axios.get(`/api/products/${id}`).then(res => setProduct(res.data))
  },[id])
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>Price ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                <Button
                  classList='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to card
                </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
