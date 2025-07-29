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
            <span className="school">Georgia Institute of Technology, Atlanta, GA</span>
            <span className="year">2024 - Current</span>
          </div>
          <ul>
            <li>GPA: 3.7</li>
          </ul>
        </div>

        <div className="education-item">
          <div className="education-header">
            <h2>B.S. Environmental Sciences and Urban Planning</h2>
            <span className="school">Florida State University, Tallahassee, FL</span>
            <span className="year">2016 - 2019</span>
          </div>
          <ul>
            <li>GPA: 3.45</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education; 