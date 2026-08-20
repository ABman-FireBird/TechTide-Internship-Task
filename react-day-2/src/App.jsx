import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import TeamCard from './components/TeamCard';
import pic from "./assets/1.jpeg";
import service from "./assets/service.png";
import uptime from "./assets/uptime.jfif";
import microservices from "./assets/microservices.png";
import support from "./assets/support.jfif";
import laptop from "./assets/laptop.png";
import mouse from "./assets/mouse.jfif";
import keyboard from "./assets/keyboard.png";
import headphones from "./assets/headphones.jfif";
import monitor from "./assets/monitor.png";
import webcam from "./assets/webcam.png";



const cards = [
  {title: "Service", description: "Offering top-notch services.", image: service},
  {title: "UpTime", description: "Guaranteed 99.999% Uptime.", image: uptime},
  {title: "Microservices", description: "Scalable and maintainable microservices architecture.", image: microservices},
  {title: "Customer Support", description: "Most mature and responsive Customer Support", image: support},
];

const products = [

  {"image": laptop, "name": "Laptop", "category": "Electronics", "price": 999.99, "rating": 4.5, "availability": "In Stock", "button": "Add to Cart"},
  {"image": mouse, "name": "Mouse", "category": "Accessories", "price": 29.99, "rating": 4.2, "availability": "In Stock", "button": "Add to Cart"},
  {"image": keyboard, "name": "Keyboard", "category": "Accessories", "price": 79.99, "rating": 4.7, "availability": "In Stock", "button": "Add to Cart"},
  {"image": headphones, "name": "Headphones", "category": "Audio", "price": 149.99, "rating": 4.6, "availability": "Out of Stock", "button": "Add to Cart"},
  {"image": monitor, "name": "Monitor", "category": "Electronics", "price": 299.99, "rating": 4.4, "availability": "In Stock", "button": "Add to Cart"},
  {"image": webcam, "name": "Webcam", "category": "Accessories", "price": 89.99, "rating": 4.1, "availability": "Limited Stock", "button": "Add to Cart"}

];


const teamMembers = [
  {"name": "Abdullah Farooq", "position": "Principle Software Engineer", "department": "Software Development", "image": pic, "socialLinks": "https://www.linkedin.com/in/abdullah-farooq-1a2b3c4d/"},
  {"name": "M Abdullah", "position": "Senior Developer", "department": "Software Development", "image": pic, "socialLinks": "https://www.linkedin.com/feed/"},
  {"name": "Hamza Khaliq", "position": "Associate Software Developer", "department": "Software Development", "image": pic, "socialLinks": "https://www.linkedin.com/feed/"},
  {"name": "Muhammad Humza Rauf", "position": "Trainee Software Developer", "department": "Software Development", "image": pic, "socialLinks": "https://www.linkedin.com/feed/"}, 
]



const App = () => {
  
  return (
    <div className="App">

      <Navbar />
      <Hero />

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center pt-16">Our Features</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto rounded mb-4"></div>
      <p className="text-gray-500 text-center mb-8">Everything that makes us stand out</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cards.map((card, index) => (
          <FeatureCard 
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>



      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center pt-16">Our Products</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto rounded mb-4"></div>
      <p className="text-gray-500 text-center mb-8">Discover our wide range of high-quality products</p>
            
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            rating={product.rating}
            availability={product.availability}
            button={product.button}
          />
        ))}
      </div>


      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center pt-16">Our Team</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto rounded mb-4"></div>
      <p className="text-gray-500 text-center mb-8">Meet the talented individuals who make it all possible</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            position={member.position}
            department={member.department}
            image = {member.image}
            socialLinks={member.socialLinks}
          />
        ))}
      </div>
      
      <Footer />
    </div>
  );
};

export default App;