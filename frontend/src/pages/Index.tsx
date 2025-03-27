import { useEffect } from 'react';
import PageContainer from '@/components/layout/PageContainer';
import HeroSection from '@/components/homepage/HeroSection';
import FeaturedProducts from '@/components/homepage/FeaturedProducts';
import Categories from '@/components/homepage/Categories';
import PromoSection from '@/components/homepage/PromoSection';
import NewsletterSection from '@/components/homepage/NewsletterSection';

const Index = () => {
  // Enhance page transitions
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <PageContainer className="p-0">
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <PromoSection />
      <NewsletterSection />
    </PageContainer>
  );
};

export default Index;
