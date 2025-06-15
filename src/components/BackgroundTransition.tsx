import { useState, useEffect } from 'react';
import papayaTreeBW from '../assets/artwork/papaya_tree_black&white.png';
import whiteFlower from '../assets/artwork/white_flower_edit_1.png';
import clump from '../assets/artwork/papaya_tree.png';
import purple from '../assets/artwork/Purple.png';
import passion from '../assets/artwork/passion.png';
import bliss from '../assets/artwork/bliss_final_4.png';
import './BackgroundTransition.css';

const BackgroundTransition = () => {
  const [currentBackground, setCurrentBackground] = useState(papayaTreeBW);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout: number;

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolling state
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      
      scrollTimeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 350);

      const sections = ['home', 'experience', 'education', 'artwork', 'projects', 'about'];

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
              setCurrentBackground(whiteFlower);
              break;
            case 'education':
              setCurrentBackground(clump);
              break;
            case 'artwork':
              setCurrentBackground(passion);
              break;
            case 'projects':
              setCurrentBackground(purple);
              break;
            case 'about':
              setCurrentBackground(bliss);
              break;
          }
          setIsTransitioning(false);
        }, 300);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className={`background-transition ${isTransitioning || isScrolling ? 'transitioning' : ''}`}>
      <div 
        className="background-image"
        style={{ backgroundImage: `url(${currentBackground})` }}
      />
    </div>
  );
};

export default BackgroundTransition; 