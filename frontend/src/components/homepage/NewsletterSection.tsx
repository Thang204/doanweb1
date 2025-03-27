import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Success!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <Mail className="h-10 w-10 mb-4" />
          
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Subscribe to Our Newsletter
          </h2>
          
          <p className="mb-8 max-w-lg">
            Join our community and be the first to know about new releases, exclusive offers, and style tips.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md flex gap-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-foreground w-full"
            />
            
            <Button type="submit" variant="secondary" disabled={isLoading}>
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-sm mt-4 text-primary-foreground/80">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
