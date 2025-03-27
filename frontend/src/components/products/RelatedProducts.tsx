import ProductGrid from '@/components/products/ProductGrid';
import { Product } from '@/components/products/ProductCard';

interface RelatedProductsProps {
  products: Product[];
}

const RelatedProducts = ({ products }: RelatedProductsProps) => {
  if (products.length === 0) {
    return null;
  }
  
  return (
    <div className="mt-20">
     
      <h2 className="text-2xl font-bold mb-8 border-l-4 border-[#FE676E] pl-4">You May Also Like</h2>
      <ProductGrid products={products} />
    </div>
  );
};

export default RelatedProducts;
