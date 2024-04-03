
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import api from '../api'; 

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    api.getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllProductsPage;
