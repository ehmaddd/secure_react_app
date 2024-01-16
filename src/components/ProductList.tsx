import React, { useEffect, useState } from 'react';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[]; // Assuming it's an array of image URLs
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
        const response = await fetch('/api/fetchProducts');
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
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.images[0]} alt={product.title} /> {/* Display the first image */}
            <p>{product.title}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
