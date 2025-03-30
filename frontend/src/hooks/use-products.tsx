import { useState, useEffect } from 'react';
import { Product } from '@/components/products/ProductCard';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // Simulating API request delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Mock data
        const mockProducts: Product[] = [
          {
            id: 1,
            name: "Air Max Pulse",
            price: 149.99,
            image: "/src/assets/1.jpg",
            category: "men",
            isNew: true,
            colors: ["#000000", "#FFFFFF", "#FF0000"]
          },
          {
            id: 2,
            name: "Ultra Boost 22",
            price: 179.99,
            originalPrice: 229.99,
            image: "/src/assets/2.jpg",
            category: "men",
            onSale: true,
            colors: ["#000000", "#FFFFFF", "#3498DB"]
          },
          {
            id: 3,
            name: "Cloud Nova",
            price: 159.99,
            image: "/src/assets/3.jpg",
            category: "women",
            colors: ["#CCCCCC", "#E74C3C", "#8E44AD"]
          },
          {
            id: 4,
            name: "Free Run 5.0",
            price: 129.99,
            image: "/src/assets/4.jpg",
            category: "women",
            colors: ["#000000", "#27AE60", "#F1C40F"]
          },
          {
            id: 5,
            name: "React Infinity",
            price: 159.99,
            image: "/src/assets/5.jpg",
            category: "women",
            isNew: true,
            colors: ["#F1C40F", "#3498DB", "#2ECC71"]
          },
          {
            id: 6,
            name: "Zoom Rival",
            price: 134.99,
            originalPrice: 159.99,
            image: "/src/assets/6.jpg",
            category: "men",
            onSale: true,
            colors: ["#000000", "#FFFFFF"]
          },
          {
            id: 7,
            name: "Fresh Foam",
            price: 119.99,
            image: "/src/assets/7.jpg",
            category: "women",
            colors: ["#FFFFFF", "#FF69B4", "#9B59B6"]
          },
          {
            id: 8,
            name: "Court Legacy",
            price: 89.99,
            image: "/src/assets/8.jpg",
            category: "men",
            colors: ["#FFFFFF", "#000000"]
          }
        ];
        
        setProducts(mockProducts);
        setFeaturedProducts(mockProducts.slice(0, 4));
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductById = (id: number) => {
    return products.find(p => p.id === id) || null;
  };

  const getProductsByCategory = (category: string) => {
    return products.filter(p => p.category === category);
  };

  const getNewArrivals = () => {
    return products.filter(p => p.isNew);
  };

  const getSaleProducts = () => {
    return products.filter(p => p.onSale);
  };

  return {
    products,
    featuredProducts,
    isLoading,
    error,
    getProductById,
    getProductsByCategory,
    getNewArrivals,
    getSaleProducts
  };
}
