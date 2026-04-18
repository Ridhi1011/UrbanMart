import { formatCurrency } from '../utils/cartUtils';
import { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';

import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { addToCart } from '../slices/cartSlice';

const ProductScreen = () => {
  const { id: productId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };


  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta title={product.name} description={product.description} />

          <Row className='g-4 mt-3 align-items-start'>
            {/* IMAGE SECTION */}
            <Col md={5}>
              <div
                style={{
                  height: '350px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '10px',
                  padding: '20px',
                }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </Col>

            {/* PRODUCT DETAILS */}
            <Col md={4}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3 style={{ fontWeight: 600, marginBottom: '10px' }}>
                    {product.name}
                  </h3>
                </ListGroup.Item>

                <ListGroup.Item>
                  <div
                    style={{
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#28a745',
                    }}
                  >
                    Price: {formatCurrency(Math.round(product.price))}
                  </div>
                </ListGroup.Item>

                <ListGroup.Item>
                  <div style={{ fontWeight: 500, color: '#555' }}>
                    Description: {product.description}
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            {/* BUY BOX */}
            <Col md={3}>
              <Card style={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong style={{ fontSize: '18px', color: '#28a745' }}>
                          {formatCurrency(Math.round(product.price))}
                        </strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status:</Col>
                      <Col>
                        <span style={{ fontWeight: 600 }}>
                          {product.countInStock > 0
                            ? 'In Stock'
                            : 'Out Of Stock'}
                        </span>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as='select'
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      className='btn-block w-100'
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        fontWeight: 600,
                      }}
                      type='button'
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add To Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductScreen;