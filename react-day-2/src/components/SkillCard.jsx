const SkillCard = ( {skillName, skillLevel, experience, icon}) => {
    return (
        <div>
            <h2>{skillName}</h2>
            <p>{skillLevel}</p>
            <p>{experience}</p>
            <img src={icon} alt={skillName} width="200" height="200"></img>
        </div>
    )
};

export default SkillCard;