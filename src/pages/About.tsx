import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-header">
        <h2>About Me</h2>
      </div>
      <div className="about">
        <p>
          I am a software engineer with a proven track record of developing scalable backend systems and robust data automation solutions. My experience building and optimizing systems with technologies like .NET, Python, and a variety of SQL systems aligns with the challenges of modern backend development.        </p>
        <p>
          My journey into computer science began at Florida State University with core coursework in UNIX and C++. After graduation, I joined Moderncanna as a Software Engineer, where my primary achievement was designing and implementing a comprehensive, Python-based application to automate project management workflows. By integrating this system with AWS infrastructure, streamlined operations for laboratory teams, and reduced manual data processing. This initiative directly removed error-prone processes and measurably increased laboratory throughput.        </p>
        <p>
          Building on this experience, I advanced to Publix Supermarkets, where I focused on backend development within a .NET environment supporting a personnel system for hundreds of thousands of users. My work was heavily centered on data and automation; I architected MySQL database solutions and revamped the weekly reporting system using PowerShell. This automation provided refined labor statistics models for various business units and fulfilled critical ad-hoc reporting needs for the Legal and HR departments. In recognition of my ability to independently diagnose and resolve complex technical challenges, I was promoted to Mid-Level Software Engineer.        </p>
        <p>
          To further deepen my expertise, I am currently pursuing a master’s degree at Georgia Tech online with a focus on computer systems. My coursework in multithreaded distributed systems, networking, and security best practices has provided me with a rigorous theoretical framework for building resilient, enterprise-scale applications.
        </p>
        <p>
          While pursuing my master’s degree, I have been working as a data engineer at Array Corporation. There I have worked in a team creating a unified client portal while building medallion architecture in databricks using data lakehouses. My hands-on experience in database management, backend development, and process automation has prepared me to deliver immediate value. 
        </p>
      </div>
    </div>
  );
};

export default About; 