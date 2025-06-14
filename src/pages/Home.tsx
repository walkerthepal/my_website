import jupiter from '../assets/artwork/jupitar_final.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Walker Phillips</h1>
          <h2>Software Engineer & Artist</h2>
          <p>M.S. Computer Science Student at Georgia Institute of Technology</p>
        </div>
        <div className="hero-image">
          <img src={jupiter} alt="Artwork by Walker Phillips" />
        </div>
      </section>
      
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a Software Engineer with a unique background in Environmental Sciences and Urban Planning. 
          Currently pursuing my M.S. in Computer Science at Georgia Tech, I combine technical expertise 
          with creative problem-solving to build innovative solutions.
        </p>
        <p>
          When I'm not coding, I express myself through digital art, creating pieces that blend 
          technology and creativity. My work spans from software development to artistic expression, 
          always seeking to bridge the gap between technical precision and creative freedom.
        </p>
      </section>
    </div>
  );
};

export default Home; 