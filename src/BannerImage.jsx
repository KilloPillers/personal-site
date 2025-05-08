import './App.css';
import BannerCanvas from './BannerCanvas'; 
import school_of_athens from './Raphael_School_of_Athens.jpg';
import school_of_athens_banner from './The_School_of_Athens_banner.jpg';
import { useEffect, useState } from 'react';

const BannerImage = () => {
  const [imageData, setImageData] = useState(null);

  // Loads the Image Data
  useEffect(() => { 
    var canvas = document.createElement('canvas'),
      context = canvas.getContext('2d'),
      img = new Image();
    
    img.onload = function () {
      // TODO: Scale the image to the size of its component.
      const viewportWidth = window.innerWidth;
      const originalWidth = img.width;
      const originalHeight = img.height;
      const scale = viewportWidth / originalWidth;
      const scaledWidth = viewportWidth;
      const scaledHeight = Math.round(originalHeight * scale);

      // 1. Draw scaled-down image to a temp canvas:
      const tmpCanvas = document.createElement('canvas');
      tmpCanvas.width = scaledWidth;
      tmpCanvas.height = scaledHeight * scale;
      const tmpCtx = tmpCanvas.getContext('2d');
      tmpCtx.drawImage(img, 0, 0, scaledWidth, scaledHeight);

      // 2. Get scaled-down image data:
      const smallImageData = tmpCtx.getImageData(0, 0, scaledWidth, scaledHeight);
      setImageData(smallImageData);
    };

    img.src = school_of_athens_banner;
  }, [])

  return (
    <BannerCanvas imageData={imageData}/>
  );
};

export default BannerImage; 
