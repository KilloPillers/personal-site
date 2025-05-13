import './App.css';
import { useEffect, useRef, useState } from 'react';
import BannerCanvas from './BannerCanvas';
import school_of_athens_banner from './The_School_of_Athens_banner.jpg';
import school_of_athens_banner_crop from './The_School_of_Athens_banner_cropped.jpg';

const BannerImage = () => {
  const [imageData, setImageData] = useState(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const desiredWidth = container.clientWidth;
    const desiredHeight = container.clientHeight;

    const img = new Image();
    img.onload = () => {
      const tmpCanvas = document.createElement('canvas');
      tmpCanvas.width = desiredWidth;
      tmpCanvas.height = desiredHeight;

      const tmpCtx = tmpCanvas.getContext('2d');
      tmpCtx.drawImage(img, 0, 0, desiredWidth, desiredHeight);

      const imageData = tmpCtx.getImageData(0, 0, desiredWidth, desiredHeight);
      setImageData(imageData);
    };

    if (isMobile) {
      img.src = school_of_athens_banner_crop;
    } else {
      img.src = school_of_athens_banner;
    }
  }, []);

  return (
    <div ref={containerRef} className="banner-container">
      {imageData && <BannerCanvas imageData={imageData} />}
    </div>
  );
};

export default BannerImage;
