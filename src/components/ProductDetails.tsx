import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  images: string[];
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`/api/fetchDetail?id=${id}`);
        // const data = await response.json();
        // console.log(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchDetails();
  }, []);

  return (
    <div>
    </div>
  );
};

export default ProductDetails;
