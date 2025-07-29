import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-page">
      <h1>Experience</h1>
      <div className="experience-section">
        <div className="experience-item">
          <div className="experience-header">
            <h2>Software Engineer</h2>
            <span className="company">Publix Super Markets Inc, Lakeland, FL</span>
            <span className="year">2022 - 2023</span>
          </div>
          <ul>
            <li>Created automated and ad hoc data reports requested by business areas, improving decision-making efficiency and data accessibility for stakeholders</li>
            <li>Maintained enterprise production SQL database environment, ensuring data integrity and system reliability for business operations for millions of daily transactions</li>
            <li>Optimized labor modeling and assignments, time clock administration, and business scales network across the production system in a .NET ecosystem, enhancing operational efficiency and workforce management</li>
          </ul>
        </div>
        <div className="experience-item">
          <div className="experience-header">
            <h2>Software Engineer</h2>
            <span className="company">ModernCanna, Lakeland, FL</span>
            <span className="year">2021 - 2022</span>
          </div>
          <ul>
            <li>Developed a Python application for the client deliverables process using AWS buckets, automating project management tasks and reducing manual workload</li>
            <li>Designed and implemented client portal backend</li>
            <li>Automated laboratory procedural tasks through scripting, increasing efficiency and reducing error rates in daily operations by 50%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience; 