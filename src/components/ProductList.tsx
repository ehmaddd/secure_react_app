import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Product {
  id: number;
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
        const response = await fetch('/api/fetchProducts');
        const data: ApiResponse = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of items to show at once
    slidesToScroll: 1, // Number of items to scroll for each navigation
  };

  return (
    <div>
      <h2>Product List</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.images[0]} alt={product.title} />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
