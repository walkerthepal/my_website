import jupiter from '../assets/artwork/jupitar_final.png';
import './Home.css';

const Home = () => {

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Walker Andrew</h1>
          <p>Software Engineer</p>
          <p><a href="https://www.linkedin.com/in/walker-andrew-6b5b24184/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
        <div className="hero-image">
          <img src={jupiter} alt="Artwork" />
        </div>
      </div>
    </div>
  );
};

export default Home; 