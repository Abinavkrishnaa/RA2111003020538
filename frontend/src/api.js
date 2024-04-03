/* eslint-disable no-unused-vars */
const api = {
    getAllProducts: async () => {
      const response = await fetch('http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?/top-n&minPrice=p&maxPrice=q');
      const data = await response.json();
      return data;
    },
    getProductById: async (productId) => {
      // Fetch product details by ID from backend API
      const response = await fetch('http://20.244.56.144/test/companies/:companyname/categories/categoryname/products/${productId}');
      const data = await response.json();
      return data;
    }
  };
  
  export default api;