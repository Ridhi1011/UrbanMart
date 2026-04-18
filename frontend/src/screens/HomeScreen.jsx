import { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
// import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const [category, setCategory] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  console.log('BASE_URL:', process.env.REACT_APP_API_URL);

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
    category,
    minPrice,
    maxPrice,
  });

  return (
    <>
      {!keyword && category === 'all' && (
        <div className='p-5 mb-4 bg-light rounded-3 text-center hero-section'>
          <h1 className='display-4 fw-bold'>Elevate Your Lifestyle</h1>
          <p className='lead'>Discover a curated collection of premium home and lifestyle essentials.</p>
          <hr className='my-4' />
          <p>Hand-picked for quality, designed for the modern home.</p>
        </div>
      )}
      {keyword && (
        <Link to='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      )}

      <Row className='mb-4 align-items-end'>
        <Col md={3}>
          <Form.Group controlId='category'>
            <Form.Label>Category</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='all'>All Categories</option>
              <option value='Home Decor'>Home Decor</option>
              <option value='Lifestyle'>Lifestyle</option>
              <option value='Accessories'>Accessories</option>
              <option value='Kitchen'>Kitchen</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group controlId='minPrice'>
            <Form.Label>Min Price</Form.Label>
            <Form.Control
              type='number'
              placeholder='Min'
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Form.Group controlId='maxPrice'>
            <Form.Label>Max Price</Form.Label>
            <Form.Control
              type='number'
              placeholder='Max'
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Button
            variant='secondary'
            onClick={() => {
              setCategory('all');
              setMinPrice('');
              setMaxPrice('');
            }}
          >
            Clear Filters
          </Button>
        </Col>
      </Row>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Meta />
          <h1>{category === 'all' ? 'Latest Products' : `${category} Collection`}</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
