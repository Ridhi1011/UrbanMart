import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useGetDashboardStatsQuery } from '../../slices/ordersApiSlice';
import Loader from '../../components/Loader';
import Message from '../../components/Message';

const DashboardScreen = () => {
  const { data: stats, isLoading, error } = useGetDashboardStatsQuery();

  return (
    <>
      <h1 className='mb-4'>Administrative Dashboard</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || 'Error loading statistics'}
        </Message>
      ) : (
        <Row>
          <Col md={3} className='mb-3'>
            <Card className='text-center border-0 shadow-sm'>
              <Card.Body className='p-4'>
                <Card.Title className='text-muted small text-uppercase'>Total Sales</Card.Title>
                <Card.Text as='h2' className='text-success fw-bold'>
                  ₹{stats.totalSales}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-3'>
            <Card className='text-center border-0 shadow-sm'>
              <Card.Body className='p-4'>
                <Card.Title className='text-muted small text-uppercase'>Total Orders</Card.Title>
                <Card.Text as='h2' className='text-primary fw-bold'>
                  {stats.ordersCount}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-3'>
            <Card className='text-center border-0 shadow-sm'>
              <Card.Body className='p-4'>
                <Card.Title className='text-muted small text-uppercase'>Total Products</Card.Title>
                <Card.Text as='h2' className='text-info fw-bold'>
                  {stats.productsCount}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mb-3'>
            <Card className='text-center border-0 shadow-sm'>
              <Card.Body className='p-4'>
                <Card.Title className='text-muted small text-uppercase'>Total Users</Card.Title>
                <Card.Text as='h2' className='text-dark fw-bold'>
                  {stats.usersCount}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default DashboardScreen;
