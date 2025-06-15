import { useState } from 'react';
import jupiter from '../assets/artwork/jupitar_final.png';
import './Home.css';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Walker Phillips</h1>
          <p>Software Engineer</p>
        </div>
        <div className="hero-image">
          <img src={jupiter} alt="Artwork" />
        </div>
      </div>
    </div>
  );
};

export default Home; 