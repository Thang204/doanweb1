import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useProducts } from '@/hooks/use-products';
import { Product } from '@/components/products/ProductCard';

interface SearchProductsProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchProducts = ({ isOpen, onClose }: SearchProductsProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const { products } = useProducts();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(filteredProducts.slice(0, 5)); // Limit to 5 results
  }, [searchTerm, products]);

  const handleProductClick = (productId: number) => {
    navigate(`/products/${productId}`);
    setSearchTerm('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg">
        <div className="flex items-center border-b p-4">
          <Search className="mr-2 h-5 w-5 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search for products..."
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="ghost" size="icon" onClick={onClose} className="ml-2">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="p-4">
          {searchResults.length > 0 ? (
            <ul className="space-y-2">
              {searchResults.map((product) => (
                <li key={product.id} className="hover:bg-muted rounded-md">
                  <button
                    className="w-full p-2 text-left flex items-center"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="h-10 w-10 rounded-md overflow-hidden bg-muted mr-3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          ) : searchTerm.trim() !== '' ? (
            <p className="text-center text-muted-foreground py-4">No products found</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchProducts;
