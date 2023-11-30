const ProductService = {
  getProducts: async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/products/');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error fetching products:', error);
    }
  },
};

export default ProductService;