import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'This Website',
      year: '2025',
      description: 'React website built with Vite and Tailwind CSS. Utilizing React Router for navigation and React Hooks for state management. Built with Cursor. Hosted via my github.'
    },
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
      title: 'Artwork',
      year: '2022 - 2025',
      description: 'Artwork created using the pixel sort python project and GIMP (GNU Image Manipulation Program).'
    },
    {
      title: 'River Management Simulator',
      year: '2019',
      description: 'Excel / VBA simulator at FSU, creating a Chattahoochee river basin management schema to satisfy multiuse needs of river basin.'
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