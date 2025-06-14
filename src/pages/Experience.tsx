import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-page">
      <h1>Experience & Education</h1>
      
      <section className="experience-section">
        <h2>Professional Experience</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <h3>Software Engineer</h3>
            <span className="company">Publix Super Markets Inc, Lakeland, FL</span>
            <span className="date">2022 - 2023</span>
          </div>
          <ul>
            <li>Created automated or ad hoc data reports requested by business areas</li>
            <li>Maintained enterprise production SQL database environment</li>
            <li>Supported labor modeling and assignments, time clock administration, and business scales network across the production system in a .NET ecosystem</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Project Manager</h3>
            <span className="company">ModernCanna, Lakeland, FL</span>
            <span className="date">2021 - 2022</span>
          </div>
          <ul>
            <li>Managed laboratory production SQL database</li>
            <li>Wrote python application for client deliverables process (AWS buckets) to automate project management tasks</li>
            <li>Worked on building out the client portal backend</li>
            <li>Automated laboratory procedural tasks via scripting</li>
          </ul>
        </div>
      </section>

      <section className="education-section">
        <h2>Education</h2>
        
        <div className="experience-item">
          <div className="experience-header">
            <h3>M.S. Computer Science</h3>
            <span className="company">Georgia Institute of Technology, Atlanta, GA</span>
            <span className="date">2024 - Current</span>
          </div>
          <ul>
            <li>Specializing in Computing Systems</li>
            <li>Coursework in Graduate level algorithms, software security, Agile vs waterfall design</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>B.S. Environmental Sciences and Urban Planning</h3>
            <span className="company">Florida State University, Tallahassee, FL</span>
            <span className="date">2016 - 2019</span>
          </div>
          <ul>
            <li>Completed coursework in programming probability, C++, object-oriented programming, and Unix</li>
            <li>Developed strong analytical and problem-solving skills</li>
            <li>Main focus on sustainability projects while managing multi stakeholder interests</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Experience; 