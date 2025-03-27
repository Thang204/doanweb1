import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageContainer from '@/components/layout/PageContainer';
import ProductGrid from '@/components/products/ProductGrid';
import { useProducts } from '@/hooks/use-products';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FilterX, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const location = useLocation();
  const { products, isLoading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [priceRange, setPriceRange] = useState([0, 250]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Categories data
  const categories = [
    { id: 'men', label: 'Men' },
    { id: 'women', label: 'Women' },
    { id: 'sport', label: 'Sport' },
    { id: 'casual', label: 'Casual' },
  ];

  // Determine initial category selection based on URL
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    const category = pathParts[pathParts.length - 1];
    
    if (category === 'men' || category === 'women') {
      setSelectedCategories([category]);
    }
  }, [location.pathname]);

  // Apply filters
  useEffect(() => {
    let result = products;
    
    // Filter by price
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Filter by categories if any are selected
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      );
    }
    
    setFilteredProducts(result);
  }, [products, priceRange, selectedCategories]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const clearFilters = () => {
    setPriceRange([0, 250]);
    setSelectedCategories([]);
  };

  return (
    <PageContainer>
      <div className="container mx-auto animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Shop All Shoes</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile filter button */}
          <div className="lg:hidden mb-4 flex justify-between items-center">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              {filtersOpen ? 'Hide Filters' : 'Show Filters'}
            </Button>
            
            {(selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 250) && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <FilterX className="h-4 w-4" />
                Clear Filters
              </Button>
            )}
          </div>
          
          {/* Filters sidebar */}
          <div className={`${filtersOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 space-y-6`}>
            <div className="hidden lg:flex justify-between items-center mb-4">
              <h2 className="font-medium">Filters</h2>
              
              {(selectedCategories.length > 0 || priceRange[0] > 0 || priceRange[1] < 250) && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-sm text-muted-foreground"
                >
                  Clear All
                </Button>
              )}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Price Range</h3>
              <Slider
                value={priceRange}
                min={0}
                max={250}
                step={10}
                onValueChange={setPriceRange}
              />
              <div className="flex items-center justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`category-${category.id}`} 
                      checked={selectedCategories.includes(category.id)}
                      onCheckedChange={() => handleCategoryChange(category.id)}
                    />
                    <Label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                      {category.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <Separator className="lg:hidden" />
          </div>
          
          {/* Products grid */}
          <div className="flex-1">
            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-80 bg-muted animate-pulse rounded-lg"></div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Products;
