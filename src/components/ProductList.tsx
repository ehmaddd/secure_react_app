import React, { useEffect, useState } from 'react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[];
}

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/fetchProducts`);
        const data: ApiResponse = await response.json();
        console.log('Server Response:', response);
        console.log('Product Data:', data);
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
        {products.map((product) => (
          <div key={product.id} style={{ width: '20%' }}>
            <img src={product.images[0]} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
