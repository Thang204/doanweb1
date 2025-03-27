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
            imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            category: "men",
            isNew: true,
            colors: ["#000000", "#FFFFFF", "#FF0000"]
          },
          {
            id: 2,
            name: "Ultra Boost 22",
            price: 179.99,
            originalPrice: 229.99,
            imageUrl: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            category: "men",
            onSale: true,
            colors: ["#000000", "#FFFFFF", "#3498DB"]
          },
          {
            id: 3,
            name: "Cloud Nova",
            price: 159.99,
            imageUrl: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
            category: "women",
            colors: ["#CCCCCC", "#E74C3C", "#8E44AD"]
          },
          {
            id: 4,
            name: "Free Run 5.0",
            price: 129.99,
            imageUrl: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
            category: "men",
            colors: ["#000000", "#27AE60", "#F1C40F"]
          },
          {
            id: 5,
            name: "React Infinity",
            price: 159.99,
            imageUrl: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80",
            category: "women",
            isNew: true,
            colors: ["#F1C40F", "#3498DB", "#2ECC71"]
          },
          {
            id: 6,
            name: "Zoom Rival",
            price: 134.99,
            originalPrice: 159.99,
            imageUrl: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
            category: "men",
            onSale: true,
            colors: ["#000000", "#FFFFFF"]
          },
          {
            id: 7,
            name: "Fresh Foam",
            price: 119.99,
            imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
            category: "women",
            colors: ["#FFFFFF", "#FF69B4", "#9B59B6"]
          },
          {
            id: 8,
            name: "Court Legacy",
            price: 89.99,
            imageUrl: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
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
