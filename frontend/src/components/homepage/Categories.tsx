import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  delay?: number;
}

const CategoryCard = ({ title, image, link, delay = 0 }: CategoryCardProps) => {
  return (
    <Link 
      to={link} 
      className="relative overflow-hidden rounded-lg group h-[300px] md:h-[400px]"
    >
      
      <div className="absolute inset-0" style={{ 
        animationDelay: `${delay}s`, 
        animationFillMode: 'forwards' 
      }}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <span className="inline-block pb-1 border-b-2 border-white transition-all duration-300 group-hover:border-primary">
          Shop Now
        </span>
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 ">
          Browse by Category
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard 
            title="Men's Collection" 
            image="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80" 
            link="/men"
            delay={0.1}
          />
          
          <CategoryCard 
            title="Women's Collection" 
            image="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80" 
            link="/women"
            delay={0.2}
          />
          
          <CategoryCard 
            title="New Arrivals" 
            image="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80" 
            link="/new-arrivals"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
