import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface ProductImageProps {
  image: string;
  isNew?: boolean;
  onSale?: boolean;
  discount?: number;
}

const ProductImage = ({ image, isNew, onSale, discount }: ProductImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden bg-muted/30">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse"></div>
      )}
      <img 
        src={image} 
        alt="Product image" 
        className={`w-full h-auto object-cover ${imageLoaded ? 'animate-blur-in' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
      />
      
      {isNew && (
        <Badge className="absolute top-4 left-4 bg-primary">New</Badge>
      )}
      
      {onSale && discount && (
        <Badge className="absolute top-4 right-4 bg-destructive">-{discount}%</Badge>
      )}
    </div>
  );
};

export default ProductImage;
