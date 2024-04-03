
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api'; 

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    api.getProductById(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.error(error));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <div>
        <p>Name: {product.productName}</p>
        <p>Company: {product.company}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}%</p>
        <p>Availability: {product.availability}</p>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
