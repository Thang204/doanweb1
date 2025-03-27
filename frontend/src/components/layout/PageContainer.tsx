import { ReactNode, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer = ({ children, className = '' }: PageContainerProps) => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={`flex-grow pt-20 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;
