import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h2>About Me</h2>
      </div>
      <div className="about">
        <p>
          Software Engineer with focus on SQL for data movement and management.
        </p>
        <p>
          I began programming in college with C++ and in a Unix environment around 2016 at Florida State University. In 2019, after finishing my undergrad with a primary focus in Environmental Science and a secondary in Urban Planning, I stayed curious about computer science. Enrolling in some community college (Polk State College) courses in Java and Python.
        </p>
        <p>
          In 2020, I accepted a role as a product manager for ModernCanna, an environmental testing and regulatory laboratory. I identified the need for a technical solution to aid in the product manager workflow and wrote, 'Report Buddy', a desktop application to streamline reporting tasks. I worked in depth with python, SQL, Crystal Reports, and WordPress during this time.
        </p>
        <p>
          I began working at Publix Super Market in 2022 as an Associate Software Engineer and at the end of 2023 was promoted to Software Engineer. I worked on large scale windows servers maintaining MySQL database clusters and associated infrastructure. This required developing scripting skills for PowerShell, C# MCP Protocol, Azure Policy and T-SQL.
        </p>
        <p>
          In late 2023, I decided to leave Publix to go back to school for my masters in Computer Science with a specialization in Computing Systems from Georgia Institute of Technology. I am currently looking for opportunities that align with this path.
        </p>
      </div>
    </div>
  );
};

export default About; 