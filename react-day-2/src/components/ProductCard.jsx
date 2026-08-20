const ProductCard = ({image, name, category, price, rating, availability, button}) => {
    
    return (
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <img src={image} className="mx-auto w-32 h-32 rounded-full" alt={name} />
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-gray-600">Category: {category}</p>
            <p className="text-xl font-bold">Price: ${price}</p>
            <p className="text-gray-500">Rating: {rating} stars</p>
            <p className="text-gray-500">Availability: {availability}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">{button}</button>
        </div>
    );
};

export default ProductCard;