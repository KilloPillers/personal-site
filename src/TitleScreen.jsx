import './App.css';
import TitleScreenCanvas from './TitleScreenCanvas.jsx';
import school_of_athens from './Raphael_School_of_Athens.jpg';
import { useEffect, useState } from 'react';

const TitleScreen = () => {
  const [imageData, setImageData] = useState(null);

  // Loads the Image Data
  useEffect(() => { 
    var canvas = document.createElement('canvas'),
      context = canvas.getContext('2d'),
      img = new Image();
    
    img.onload = function () {
      const viewportWidth = window.innerWidth;
      const originalWidth = img.width;
      const originalHeight = img.height;
      const scale = viewportWidth / originalWidth;
      const scaledWidth = viewportWidth;
      const scaledHeight = Math.round(originalHeight * scale);

      // 1. Draw scaled-down image to a temp canvas:
      const tmpCanvas = document.createElement('canvas');
      tmpCanvas.width = scaledWidth;
      tmpCanvas.height = scaledHeight;
      const tmpCtx = tmpCanvas.getContext('2d');
      tmpCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

      // 2. Get scaled-down image data:
      const smallImageData = tmpCtx.getImageData(0, 0, scaledWidth, scaledHeight);
      setImageData(smallImageData);
    };

    img.src = school_of_athens;
  }, [])

  return (
    <div>
      <div style ={{ position: 'relative', width: '100vw', height: '100vh'}}>
       <TitleScreenCanvas imageData={imageData}/>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(90deg,rgba(16, 16, 16, 1) 20%, rgba(255, 0, 0, 0) 100%)',
        padding: '10px',
        borderRadius: '8px',
        zIndex: 1
      }}>
        <div className='nav'>
          <ul>
            <li>INDEX</li>
            <li>WORK</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TitleScreen; 
