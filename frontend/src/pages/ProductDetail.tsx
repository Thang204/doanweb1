import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/use-products';
import { useCart } from '@/hooks/use-cart';

import ProductImage from '@/components/products/ProductImage';
import ProductDetails from '@/components/products/ProductDetails';
import RelatedProducts from '@/components/products/RelatedProducts';
import { Product } from '@/components/products/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById, products } = useProducts();
  const { addItem } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  
  const productId = id ? parseInt(id, 10) : 0;
  const product = getProductById(productId);
  
  useEffect(() => {
    if (product) {
      // Get related products from the same category
      const related = products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
  }, [product, products]);
  
  const handleAddToCart = () => {
    if (product && selectedSize) {
      addItem(product, quantity, selectedSize);
    } else if (product) {
      addItem(product, quantity);
    }
  };
  
  if (!product) {
    return (
      <PageContainer>
        <div className="container mx-auto py-12 animate-fade-in">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Button variant="outline" onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </div>
      </PageContainer>
    );
  }
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;
  
  return (
    <PageContainer>
      <div className="container mx-auto py-12 animate-fade-in">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2 hover:bg-transparent hover:text-primary transition-colors" 
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <ProductImage 
            imageUrl={product.imageUrl} 
            isNew={product.isNew} 
            onSale={product.onSale} 
            discount={discount} 
          />
          
          {/* Product Info */}
          <ProductDetails 
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            handleAddToCart={handleAddToCart}
          />
        </div>
        
        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>
    </PageContainer>
  );
};

export default ProductDetail;
