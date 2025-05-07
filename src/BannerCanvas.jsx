import PoissonDiskSampling from 'poisson-disk-sampling';
import React, { useRef, useEffect } from 'react';

const BannerCanvas = (imageData, radius=10) => {
  const canvasRef = useRef(null);
  const samplerRef = useRef(null);
  const animationFrameId = useRef();

  useEffect(() => { 
    if (!imageData) return;
      
    samplerRef.current = new PoissonDiskSampling({
      shape: [imageData.width, imageData.height],
      minDistance: 4,
      maxDistance: 20,
      tries: 20,
      distanceFunction: (point) => {
        return point[0] / imageData.width
      }
    })

    samplerRef.current.addPoint([imageData.width/2, imageData.height/2]);

    function drawFrame() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');
      
      // Draw 200 circle every frame
      for (let i = 0; i < 200; i++) {
        var newPoint = samplerRef.current.next();
        if (!newPoint) {
          return;
        }
        var x, y = newPoint
        console.log(x, y)
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, math.pi * 2);
        ctx.fillstyle = color;
      };

      requestAnimationFrame(drawFrame);
    }
  
    drawFrame(); 

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    }
  
    }, []);

  return (
    <canvas ref={canvasRef}/>
  )
}

export default BannerCanvas; 
