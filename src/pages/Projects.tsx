import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'JobCompare App',
      year: '2025',
      description: 'Android App for comparing job offers, allowing users to add weights to attributes of individual job offers to better rank and compare to multiple offers. Built for GT class project.',
      githubUrl: null
    },
    {
      title: 'Wordwell App',
      year: '2025',
      description: 'Android App including word searches, crosswords, and wordle clone. Written in Kotlin and using room (SQlite) DB for the word dictionary.',
      githubUrl: 'https://github.com/walkerthepal/wordwell'
    },
    {
      title: 'Uploader',
      year: '2025',
      description: 'Website to upload short form content to Youtube, Instagram, and Tiktok simultaneously using multithreading. Written in Golang and HTMX. Utilizing Google Cloud, Meta Developer Portal, and TikTok APIs.',
      githubUrl: 'https://github.com/walkerthepal/uploader'
    },
    {
      title: 'Pitch Detector',
      year: '2024',
      description: 'Guitar tuner written out of a frustration of good options in app stores. Backend in Golang for pitch detection signal processing with C bindings, and frontend in REACT.',
      githubUrl: 'https://github.com/walkerthepal/pitch-detect'
    },
    {
      title: 'This Website',
      year: '2025',
      description: 'React website built with Vite and Tailwind CSS. Utilizing React Router for navigation and React Hooks for state management. Built with Cursor. Hosted via my github.',
      githubUrl: 'https://github.com/walkerthepal/my_website'
    },
    {
      title: 'Artwork',
      year: '2022 - 2025',
      description: 'Artwork created using the pixel sort python project and GIMP (GNU Image Manipulation Program).',
      githubUrl: null
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
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 