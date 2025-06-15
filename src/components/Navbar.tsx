import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="navbar-brand-link"
        >
          Walker Andrew
        </Link>
      </div>
      <div className="navbar-links">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          Home
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          Experience
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          Education
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          Projects
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          About
        </Link>
        <Link
          to="artwork"
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className="nav-link"
        >
          Artwork
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;