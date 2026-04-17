import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import { useGetOrdersQuery } from '../../slices/ordersApiSlice';
import { useGetUsersQuery } from '../../slices/usersApiSlice';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const DashboardScreen = () => {
  const {
    data: productData,
    isLoading: loadingProducts,
    error: errorProducts,
  } = useGetProductsQuery({});
  const {
    data: orders,
    isLoading: loadingOrders,
    error: errorOrders,
  } = useGetOrdersQuery();
  const {
    data: users,
    isLoading: loadingUsers,
    error: errorUsers,
  } = useGetUsersQuery();

  return (
    <>
      <h1>Admin Dashboard</h1>
      {loadingProducts || loadingOrders || loadingUsers ? (
        <Loader />
      ) : errorProducts || errorOrders || errorUsers ? (
        <Message variant='danger'>
          {errorProducts?.data?.message ||
            errorOrders?.data?.message ||
            errorUsers?.data?.message}
        </Message>
      ) : (
        <Row className='mt-4'>
          <Col md={4} className='mb-3'>
            <Card className='text-center bg-primary text-white p-3'>
              <Card.Body>
                <Card.Title>Total Products</Card.Title>
                <Card.Text as='h2'>{productData.count}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mb-3'>
            <Card className='text-center bg-success text-white p-3'>
              <Card.Body>
                <Card.Title>Total Orders</Card.Title>
                <Card.Text as='h2'>{orders.length}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className='mb-3'>
            <Card className='text-center bg-info text-white p-3'>
              <Card.Body>
                <Card.Title>Total Users</Card.Title>
                <Card.Text as='h2'>{users.length}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default DashboardScreen;
