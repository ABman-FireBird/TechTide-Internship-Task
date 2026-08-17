
const Skills = () => {
    const skills = ["AI/ML", "WEBDEV", "VERSION CONTROL", "AWS", "GIT"];
    
    return(
        <div className="py-8 text-center bg-gray-900 text-white">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                <span key={index} className="bg-blue-600 px-3 py-1 rounded-full text-sm">{skill}</span>
                ))}
            </div>
        </div>
    );
    
};

export default Skills