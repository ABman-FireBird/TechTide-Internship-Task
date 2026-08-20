const ProfileCard = ({name, role, university, image, description}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{university}</p>
            <img src={image} width="200" height="200" alt={name} />
            <p>{description}</p>
        </div>
    );
};

export default ProfileCard;