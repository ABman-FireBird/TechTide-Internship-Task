const Button = ({ text, variant, size }) => {
    return (
        <button className={`${variant} ${size} rounded transition duration-300 cursor-pointer`}>
            {text}
        </button>
    )
};

export default Button;