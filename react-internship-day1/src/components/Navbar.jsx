
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
        <h1 className="text-xl font-bold">Abdullah Farooq</h1>
        <ul className="flex gap-6">
            <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-400 cursor-pointer transition">About</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Skills</li>
            <li className="hover:text-blue-400 cursor-pointer transition">Contacts</li>
        </ul>
        </nav>
    );
};

export default Navbar;