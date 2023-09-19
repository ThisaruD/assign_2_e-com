import  { useEffect, useState } from 'react';
import { useDispatch,  } from 'react-redux';
import { fetchProducts } from '../slices/productSlice';
import Product from './Product'; 

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchProducts())
      .then((action) => {
        setProducts(action.payload.products);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, [dispatch]);

  const renderProductList = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (products.length === 0) {
      return <p>No products available.</p>;
    }

    // Split products into rows with four products per row
    const rows = [];
    for (let i = 0; i < products.length; i += 4) {
      const rowProducts = products.slice(i, i + 4);
      rows.push(
        <Row key={i}>
          {rowProducts.map((product) => (
            <Col key={product.id} sm={3}>
              <Product
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.images[0]}
              />
            </Col>
          ))}
        </Row>
      );
    }

    return rows;
  };

  return (
    <div>
      <h1>Product List</h1>
      {renderProductList()}
    </div>
  );
}

export default ProductList;
