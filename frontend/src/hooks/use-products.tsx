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
            name: "Air Force 1",
            price: 149.99,
            image: "/src/assets/AIR+FORCE+1+'07.png",
            category: "men",
            isNew: true,
            colors: ["#000000", "#FFFFFF", "#FF0000"]
          },
          {
            id: 2,
            name: "Air Force 1 LV8 2",
            price: 179.99,
            originalPrice: 229.99,
            image: "/src/assets/AIR+FORCE+1+LV8+2+(GS).png",
            category: "men",
            onSale: true,
            colors: ["#000000", "#FFFFFF", "#3498DB"]
          },
          {
            id: 3,
            name: "Killshot 2 Leather",
            price: 159.99,
            image: "/src/assets/KILLSHOT+2+LEATHER.png",
            category: "women",
            colors: ["#CCCCCC", "#E74C3C", "#8E44AD"]
          },
          {
            id: 4,
            name: "Court Vision Low",
            price: 129.99,
            image: "/src/assets/NIKE+COURT+VISION+LO.png",
            category: "women",
            colors: ["#000000", "#27AE60", "#F1C40F"]
          },
          {
            id: 5,
            name: "Cortez (GS)",
            price: 159.99,
            image: "/src/assets/NIKE+KIDS+CORTEZ+(GS).png",
            category: "women",
            isNew: true,
            colors: ["#F1C40F", "#3498DB", "#2ECC71"]
          },
          {
            id: 6,
            name: "Dunk Low GS",
            price: 134.99,
            originalPrice: 159.99,
            image: "/src/assets/NIKE+DUNK+LOW+GS.png",
            category: "men",
            onSale: true,
            colors: ["#000000", "#FFFFFF"]
          },
          {
            id: 7,
            name: "Vista Sandal",
            price: 119.99,
            image: "/src/assets/NIKE+VISTA+SANDAL.png",
            category: "women",
            colors: ["#FFFFFF", "#FF69B4", "#9B59B6"]
          },
          {
            id: 8,
            name: "Waffle Racer Crater",
            price: 89.99,
            image: "/src/assets/W+AF1+SHADOW.png",
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
