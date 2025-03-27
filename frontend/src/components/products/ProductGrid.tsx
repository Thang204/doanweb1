import { useState, useEffect } from 'react';
import ProductCard, { Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  className?: string;
}

const ProductGrid = ({ products, className = '' }: ProductGridProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${className}`}>
      {products.map((product, index) => (
        <div 
          key={product.id} 
          className={`opacity-0 ${isLoaded ? 'animate-fade-in opacity-100' : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
