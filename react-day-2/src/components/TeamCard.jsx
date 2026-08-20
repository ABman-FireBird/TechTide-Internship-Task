const TeamCard = ( { name, position, department, image, socialLinks } ) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <p className="font-bold text-lg">{name}</p>
            <p className="text-gray-600">{position}</p>
            <p className="text-gray-500">{department}</p>
            <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto" />
            <a href={socialLinks} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition">
                LinkedIn
            </a>
        </div>
    );
};

export default TeamCard;