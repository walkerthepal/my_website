import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>Walker Phillips</a>
      </div>
      <div className="navbar-links">
        <a href="#home" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>Home</a>
        <a href="#experience" onClick={(e) => {
          e.preventDefault();
          scrollToSection('experience');
        }}>Experience</a>
        <a href="#education" onClick={(e) => {
          e.preventDefault();
          scrollToSection('education');
        }}>Education</a>
        <a href="#projects" onClick={(e) => {
          e.preventDefault();
          scrollToSection('projects');
        }}>Projects</a>
        <a href="#about" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}>About</a>
        <a href="#artwork" onClick={(e) => {
          e.preventDefault();
          scrollToSection('artwork');
        }}>Artwork</a>
      </div>
    </nav>
  );
};

export default Navbar; 