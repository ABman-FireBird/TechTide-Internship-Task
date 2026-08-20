import Button from './Button';
import pic from "../assets/1.jpeg";

const NavBar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex items-center justify-between shadow-md sticky top-0 z-10">
            <img src={pic} className="w-10 h-10 rounded-full" alt="Logo" />
            <ul className="flex items-center space-x-4">
                <li className="hover:text-blue-400 transition"><a href="#Home">Home</a></li>
                <li className="hover:text-blue-400 transition"><a href="#Features">Features</a></li>
                <li className="hover:text-blue-400 transition"><a href="#Team">Team</a></li>
                <li className="hover:text-blue-400 transition"><a href="#Products">Products</a></li>
                <li className="hover:text-blue-400 transition"><a href="#Contact">Contact</a></li>
                <li><Button text="Get Started" variant="bg-blue-500 text-white hover:bg-blue-600" size="px-4 py-2" /></li>
            </ul>
        </nav>
    );
};

export default NavBar;