import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductGrid from '../products/ProductGrid';


import { useProducts } from '@/hooks/use-products';

const FeaturedProducts = () => {
  const { featuredProducts } = useProducts();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('featured-products');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="featured-products" 
      className="py-20 px-6"
    >
      <div className="container mx-auto">
        <div className={`flex justify-between items-baseline mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium shoes</p>
          </div>
          
          <Link 
            to="/products" 
            className="text-primary font-medium flex items-center gap-1 hover:underline"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
        <div className={isVisible ? 'animate-fade-in' : 'opacity-0'} style={{ animationDelay: '0.2s' }}>
          <ProductGrid products={featuredProducts} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
