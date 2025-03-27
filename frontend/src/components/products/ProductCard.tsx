import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  onSale?: boolean;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

  return (
    <div 
      className={cn(
        "product-card group relative rounded-lg overflow-hidden bg-white",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse"></div>
        )}
        
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className={cn(
              "object-cover w-full h-full transition-transform duration-300 group-hover:scale-105",
              isHovered ? "scale-105" : "scale-100",
              !imageLoaded ? "opacity-0" : "opacity-100"
            )}
            onLoad={() => setImageLoaded(true)}
          />
        </Link>
        
        {product.isNew && (
          <Badge className="absolute top-2 left-2 bg-primary">New</Badge>
        )}
        
        {product.onSale && (
          <Badge className="absolute top-2 right-2 bg-destructive">-{discount}%</Badge>
        )}
        
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center bg-background/80 backdrop-blur-sm transition-transform duration-300",
            isHovered ? "translate-y-0" : "translate-y-full"
          )}
        >
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 mr-2 bg-white hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
          </Button>
          <Button size="icon" variant="ghost">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-medium text-base hover:text-primary transition-colors truncate">
            {product.name}
          </h3>
          
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-semibold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </Link>

        <div className="mt-3 flex items-center gap-1">
          {product.colors.map((color, idx) => (
            <div 
              key={idx}
              className="w-3 h-3 rounded-full border border-border"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">
            {product.colors.length} colors
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
