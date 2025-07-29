import jupiter from '../assets/artwork/jupitar_final.png';
import './Home.css';

const Home = () => {

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Walker Phillips</h1>
          <p>Software Engineer</p>
          <hr />
          <p><a href="mailto:walker.a.phillips@gmail.com">walker.a.phillips@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/walker-andrew-6b5b24184/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/walkerthepal" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
        <div className="hero-image">
          <img src={jupiter} alt="Artwork" />
        </div>
      </div>
    </div>
  );
};

export default Home; 