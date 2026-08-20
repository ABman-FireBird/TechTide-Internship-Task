import Button from './Button';
import pic from "../assets/1.jpeg";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between h-screen p-8 bg-gray-100 gap-8">
            <div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Welcome to Our Website</h1>
                <p className="text-gray-600 mb-6">We offer the best products and services when it comes to AI or Cloud Integrations.</p>
                <Button text="Get Started" variant="bg-blue-500 text-white hover:bg-blue-600" size="px-4 py-2"/>
            </div>
            <img src={pic} alt="Logo" className="mb-6 w-64 h-64 rounded-full"/>
        </div>
    );
};


export default Hero;