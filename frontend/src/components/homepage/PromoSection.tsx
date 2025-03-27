import { Truck, RefreshCw, Shield, Award } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="flex flex-col items-center text-center px-6 py-8 rounded-lg bg-white shadow-sm opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}s`, animationFillMode: 'forwards' }}
    >
      <div className="bg-primary/10 p-3 rounded-full mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const PromoSection = () => {
  return (
    <section className="py-20 px-6 bg-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 animate-slide-up">
          Why Choose Us
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          We're committed to providing the best shopping experience for premium footwear
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Truck className="h-6 w-6" />}
            title="Free Shipping"
            description="Free worldwide shipping on all orders over $150"
            delay={0.2}
          />
          
          <FeatureCard 
            icon={<RefreshCw className="h-6 w-6" />}
            title="Easy Returns"
            description="30-day easy return policy with no questions asked"
            delay={0.3}
          />
          
          <FeatureCard 
            icon={<Shield className="h-6 w-6" />}
            title="Secure Payment"
            description="100% secure payment methods with encryption"
            delay={0.4}
          />
          
          <FeatureCard 
            icon={<Award className="h-6 w-6" />}
            title="Quality Guarantee"
            description="All products are authentic with full warranty"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
