import { Button } from '@/components/ui/button';

const sizeOptions = ['US 7', 'US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11'];

interface SizeSelectorProps {
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
}

const SizeSelector = ({ selectedSize, setSelectedSize }: SizeSelectorProps) => {
  return (
    <div>
      <h2 className="text-sm font-medium mb-3">Select Size</h2>
      <div className="grid grid-cols-3 gap-2">
        {sizeOptions.map(size => (
          <Button
            key={size}
            type="button"
            variant={selectedSize === size ? "default" : "outline"}
            className="text-sm"
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
