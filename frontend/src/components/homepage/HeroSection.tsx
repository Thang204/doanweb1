import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-blue-500">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80" 
          alt="Hero background" 
          className="object-cover w-full h-full opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Step into <span className="text-primary">Innovation</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
            Discover our collection of premium shoes designed for comfort, style, and performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="group bg-blue-500 text-white">
              <Link to="/products">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/new-arrivals">
                New Arrivals
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
