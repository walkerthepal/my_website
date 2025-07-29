import './TechnicalSkills.css';

const TechnicalSkills = () => {
  const skills = {
    languages: ['Python', 'Kotlin', 'Go', 'JavaScript', 'C++', 'SQL', 'HTML', 'CSS'],
    frameworks: ['React', '.NET', 'HTMX', 'Android SDK'],
    cloud: ['AWS', 'Google Cloud'],
    databases: ['RoomDB', 'SQLite', 'SQL Server', 'MySQL', 'PostgreSQL']
  };

  return (
    <div className="technical-skills-page">
      <h1>Technical Skills</h1>
      <div className="skills-grid">
        <div className="skill-category">
          <h2>Languages</h2>
          <div className="skill-tags">
            {skills.languages.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h2>Frameworks</h2>
          <div className="skill-tags">
            {skills.frameworks.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h2>Cloud</h2>
          <div className="skill-tags">
            {skills.cloud.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h2>Databases</h2>
          <div className="skill-tags">
            {skills.databases.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills; 