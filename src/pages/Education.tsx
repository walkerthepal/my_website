import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <div className="education-header">
        <h1>Education</h1>
      </div>
      <div className="education-section">
        <div className="education-item">
          <div className="education-header">
            <h2>M.S. Computer Science</h2>
            <span className="school">Georgia Institute of Technology</span>
            <span className="year"> 2024 - Current</span>
          </div>
          <ul>
            <li>Specializing in Computing Systems</li>
            <li>Coursework in Graduate level algorithms, software security, software architecture, agile vs waterfall design, and distributed systems</li>
          </ul>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h2>B.S. Environmental Sciences and Urban Planning</h2>
            <span className="school">Florida State University</span>
            <span className="year"> 2016 - 2019</span>
          </div>
          <ul>
            <li>Completed coursework in programming probability, C++, object-oriented programming, and Unix</li>
            <li>Developed strong analytical and problem-solving skills</li>
            <li>Main focus on sustainability projects while managing stakeholder interests</li>
          </ul>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h2>Computer Science Courses</h2>
            <span className="school">Polk State College</span>
            <span className="year"> 2019 - 2020</span>
          </div>
          <ul>
            <li>Courses in Java and Python programming</li>
            <li>Enhanced programming skills and knowledge</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education; 