import { Truck, RefreshCw, Shield } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="mt-8 space-y-4 pt-4 border-t">
      <div className="flex items-center gap-3">
        <Truck className="h-5 w-5 text-muted-foreground" />
        <p className="text-sm">Free shipping on orders over $150</p>
      </div>
      <div className="flex items-center gap-3">
        <RefreshCw className="h-5 w-5 text-muted-foreground" />
        <p className="text-sm">30-day easy returns</p>
      </div>
      <div className="flex items-center gap-3">
        <Shield className="h-5 w-5 text-muted-foreground" />
        <p className="text-sm">Quality guarantee</p>
      </div>
    </div>
  );
};

export default ShippingInfo;
