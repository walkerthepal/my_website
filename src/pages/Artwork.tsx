import { useState } from 'react';
import papayaTree from '../assets/artwork/papaya_tree.png';
import papayaTreeBW from '../assets/artwork/papaya_tree_black&white.png';
import purple from '../assets/artwork/Purple.png';
import clump from '../assets/artwork/clump.png';
import jupiter from '../assets/artwork/jupitar_final.png';
import whiteFlower from '../assets/artwork/white_flower_edit_1.png';
import purpleSpike from '../assets/artwork/purlpe_spike_2.png';
import bliss from '../assets/artwork/bliss_final_4.png';
import passion from '../assets/artwork/passion.png';
import './Artwork.css';

const Artwork = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artwork = [
    { src: passion, title: 'Passion' },
    { src: papayaTree, title: 'Papaya Tree' },
    { src: papayaTreeBW, title: 'Papaya Tree (B&W)' },
    { src: purple, title: 'Purple' },
    { src: clump, title: 'Clump' },
    { src: jupiter, title: 'Jupiter' },
    { src: whiteFlower, title: 'White Flower' },
    { src: purpleSpike, title: 'Purple Spike' },
    { src: bliss, title: 'Bliss' },
  ];

  return (
    <div className="artwork-page">
      <h1>Artwork</h1>
      <div className="gallery">
        {artwork.map((piece, index) => (
          <div 
            key={index} 
            className="gallery-item"
            onClick={() => setSelectedImage(piece.src)}
          >
            <img src={piece.src} alt={piece.title} />
            <h3>{piece.title}</h3>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected artwork" />
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artwork; 