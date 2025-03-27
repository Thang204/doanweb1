
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ChevronLeft, ShoppingBag } from 'lucide-react';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/use-cart';

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  return (
    <PageContainer>
      <div className="container mx-auto py-12 animate-fade-in">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12 space-y-6">
            <div className="mx-auto w-20 h-20 rounded-full bg-muted flex items-center justify-center">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Your cart is empty</h2>
              <p className="text-muted-foreground">Looks like you haven't added any items to your cart yet.</p>
            </div>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="col-span-2 space-y-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex gap-6 items-center p-4 bg-white rounded-lg shadow-sm">
                  <Link to={`/products/${item.product.id}`} className="w-24 h-24 rounded-md overflow-hidden bg-muted/30 shrink-0">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover" 
                    />
                  </Link>
                  
                  <div className="flex-1 min-w-0">
                    <Link 
                      to={`/products/${item.product.id}`} 
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    
                    {item.size && (
                      <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                    )}
                    
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </Button>
                      </div>
                      
                      <Button
                        variant="ghost"
                        className="text-muted-foreground hover:text-destructive"
                        size="sm"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <span className="font-medium">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-between mt-6">
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-2" 
                  asChild
                >
                  <Link to="/products">
                    <ChevronLeft className="h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="text-muted-foreground" 
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">
                      {totalPrice >= 150 ? 'Free' : '$5.99'}
                    </span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg">
                    <span className="font-medium">Total</span>
                    <span className="font-bold">
                      ${(totalPrice >= 150 ? totalPrice : totalPrice + 5.99).toFixed(2)}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full mt-4" 
                    size="lg" 
                    onClick={() => navigate('/checkout')}
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Taxes calculated at checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default Cart;
