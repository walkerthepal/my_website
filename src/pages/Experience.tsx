import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-page">
      <h1>Experience</h1>
      <div className="experience-section">
        <div className="experience-item">
          <div className="experience-header">
            <h2>Software Engineer</h2>
            <span className="company">Publix Super Markets</span>
            <span className="year">2023</span>
          </div>
          <ul>
            <li>Developed and maintained PowerShell scripts for automation and system management</li>
            <li>Implemented C# MCP Protocol solutions for system integration</li>
            <li>Extensive work with T-SQL for database operations and optimization</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h2>Associate Software Engineer</h2>
            <span className="company">Publix Super Markets</span>
            <span className="year">2022</span>
          </div>
          <ul>
            <li>Maintained MySQL database clusters in a large-scale corporate Windows server environment</li>
            <li>Wrote Ad Hoc SQL queries for data analysis and reporting</li>
            <li>Collaborated with cross-functional teams on system improvements</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h2>Product Manager</h2>
            <span className="company">ModernCanna</span>
            <span className="year">2020</span>
          </div>
          <ul>
            <li>Developed 'Report Buddy' desktop application to streamline reporting tasks</li>
            <li>Worked with Python, SQL, Crystal Reports, and WordPress</li>
            <li>Managed product development and implementation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience; 