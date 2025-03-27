interface ColorDisplayProps {
  colors: string[];
}

const ColorDisplay = ({ colors }: ColorDisplayProps) => {
  return (
    <div>
      <h2 className="text-sm font-medium mb-3">Available Colors</h2>
      <div className="flex gap-3">
        {colors.map((color, idx) => (
          <div 
            key={idx}
             className="w-8 h-8 rounded-full border border-accent/30 shadow-sm transition-transform hover:scale-110 cursor-pointer"
            style={{ backgroundColor: color }}
            aria-label={`Color ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorDisplay;
