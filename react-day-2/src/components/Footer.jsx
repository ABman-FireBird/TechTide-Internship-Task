const Footer = () => {
    
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 bg-gray-800 text-white mt-12 border-t border-gray-700 pt-8">
            <div>
                <p>© 2026 Abdullah's Company</p>
                <p className="text-sm text-gray-400">Building AI-Powered Solutions for the Future</p>
            </div>
            <ul className="flex space-x-4">
                <li><a href="https://www.facebook.com" className="hover:text-blue-500 transition">Facebook</a></li>
                <li><a href="https://www.twitter.com" className="hover:text-blue-500 transition">Twitter</a></li>
                <li><a href="https://www.instagram.com" className="hover:text-blue-500 transition">Instagram</a></li>
            </ul>
            <ul className="flex space-x-4">
                <li><a href="#Home" className="hover:text-blue-500 transition">Home</a></li>
                <li><a href="#Features" className="hover:text-blue-500 transition">Features</a></li>
                <li><a href="#Products" className="hover:text-blue-500 transition">Products</a></li>
                <li><a href="#Team" className="hover:text-blue-500 transition">Team</a></li>
            </ul>
        </footer>
    );
};

export default Footer;