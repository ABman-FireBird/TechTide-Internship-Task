const FeatureCard = ({ title, description, image}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <img src={image} alt={title} className="w-24 h-24 object-contain mx-auto mt-4" />
        </div>
    )
};


export default FeatureCard;