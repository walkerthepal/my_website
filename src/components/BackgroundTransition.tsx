import { useState, useEffect } from 'react';
import papayaTreeBW from '../assets/artwork/papaya_tree_black&white.png';
import jupiter from '../assets/artwork/jupitar_final.png';
import whiteFlower from '../assets/artwork/white_flower_edit_1.png';
import purple from '../assets/artwork/Purple.png';
import passion from '../assets/artwork/passion.png';
import './BackgroundTransition.css';

const BackgroundTransition = () => {
  const [currentBackground, setCurrentBackground] = useState(papayaTreeBW);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'artwork', 'projects'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find which section is currently in view
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      // Set background based on current section
      if (currentSection) {
        setIsTransitioning(true);
        setTimeout(() => {
          switch (currentSection) {
            case 'home':
              setCurrentBackground(papayaTreeBW);
              break;
            case 'experience':
              setCurrentBackground(jupiter);
              break;
            case 'artwork':
              setCurrentBackground(passion);
              break;
            case 'projects':
              setCurrentBackground(purple);
              break;
          }
          setIsTransitioning(false);
        }, 300); // Match this with CSS transition duration
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`background-transition ${isTransitioning ? 'transitioning' : ''}`}>
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${currentBackground})` }}
      />
    </div>
  );
};

export default BackgroundTransition; 