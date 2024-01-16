import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductList.css';

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
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className="product-slider">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-slide">
            <Link to={`/products/${product.id}`}>
              <img src={product.images[0]} alt={product.title} />
              <p className="product-title">{product.title}</p>
              <p className="product-price">${product.price}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
