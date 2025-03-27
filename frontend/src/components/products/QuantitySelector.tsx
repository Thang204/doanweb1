import { Button } from '@/components/ui/button';

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: (value: React.SetStateAction<number>) => void;
}

const QuantitySelector = ({ quantity, setQuantity }: QuantitySelectorProps) => {
  return (
    <div>
      <h2 className="text-sm font-medium mb-3">Quantity</h2>
      <div className="flex items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
        >
          -
        </Button>
        <span className="w-12 text-center">{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setQuantity(q => q + 1)}
          aria-label="Increase quantity"
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
