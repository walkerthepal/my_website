import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Wordwell',
      year: '2025',
      description: 'Android App including word searches, crosswords, and wordle clone. Written in Kotlin and using room (SQlite) DB for the word dictionary.'
    },
    {
      title: 'Uploader',
      year: '2025',
      description: 'Website to upload short form content to Youtube, Instagram, and Tiktok simultaneously using multithreading. Written in Golang and HTMX. Utilizing Google Cloud, Meta Developer Portal, and TikTok APIs.'
    },
    {
      title: 'Pitch Detector',
      year: '2024',
      description: 'Guitar tuner written out of a frustration of good options in app stores. Backend in Golang for pitch detection signal processing with C bindings, and frontend in REACT.'
    },
    {
      title: 'River Management Simulator',
      year: '2019',
      description: 'Excel / VBA simulation at FSU, creating a Chattahoochee river basin management schema to satisfy multiuse needs of river basin.'
    }
  ];

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h2>{project.title}</h2>
              <span className="project-year">{project.year}</span>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 