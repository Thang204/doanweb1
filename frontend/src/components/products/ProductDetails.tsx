import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SizeSelector from './SizeSelector';
import ColorDisplay from './ColorDisplay';
import QuantitySelector from './QuantitySelector';
import ShippingInfo from './ShippingInfo';
import { Product } from '@/components/products/ProductCard';

interface ProductDetailsProps {
  product: Product;
  quantity: number;
  setQuantity: (value: React.SetStateAction<number>) => void;
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
  handleAddToCart: () => void;
}

const ProductDetails = ({ 
  product, 
  quantity, 
  setQuantity, 
  selectedSize, 
  setSelectedSize, 
  handleAddToCart 
}: ProductDetailsProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
      
      <Separator />
      
      <SizeSelector selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      
      <ColorDisplay colors={product.colors} />
      
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      
      <div className="flex gap-3 mt-8">
        <Button
          className="flex-1 gap-2"
          onClick={handleAddToCart}
          disabled={!selectedSize}
        >
          <ShoppingBag className="h-5 w-5" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      
      <ShippingInfo />
    </div>
  );
};

export default ProductDetails;
