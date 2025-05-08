import PoissonDiskSampling from 'poisson-disk-sampling';
import React, { useRef, useEffect } from 'react';

const RADIUS_FACTOR = 10; 

function randomInt(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}

const TitleScreenCanvas = ({ imageData }) => {
  const canvasRef = useRef(null);
  const samplerRef = useRef(null);
  const pointsRef = useRef([]);
  const animationFrameId = useRef();

  useEffect(() => { 
    if (!imageData) return;
    const radius = imageData.height / imageData.width * RADIUS_FACTOR
      
    samplerRef.current = new PoissonDiskSampling({
      shape: [imageData.width, imageData.height],
      minDistance: 1.1,
      maxDistance: 55,
      tries: 15,
      distanceFunction: function (point) {
        //var pixelRedIndex = (Math.round(point[0] + Math.round(point[1] * imageData.width))) * 4

        return radius/20; //Math.pow(imageData.data[pixelRedIndex] / 255, 2.7);
      }
    })
    
    pointsRef.current = []; 
    const firstPoint = samplerRef.current.addPoint([0, randomInt(0,imageData.height)]);
    if (firstPoint) pointsRef.current.push(firstPoint)

    function drawFrame() {
      for (let i = 0; i < 300; i++) {
        const newPoint = samplerRef.current.next();
        if (newPoint) {
          pointsRef.current.push(newPoint);
        }
        else {
          return;
        }
      }
      animationFrameId.current = requestAnimationFrame(drawFrame);

      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = imageData.width;
      canvas.height = imageData.height;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw points 
      pointsRef.current.forEach(point => {
        ctx.beginPath();
        ctx.arc(point[0], point[1], radius, 0, Math.PI * 2);
        const x = Math.floor(point[0]);
        const y = Math.floor(point[1]);
        const width = imageData.width;
        const index = (y * width + x) * 4;
        const r = imageData.data[index];
        const g = imageData.data[index + 1];
        const b = imageData.data[index + 2];
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();
      });

      console.log("drawing");
    }
  
    drawFrame(); 

    return () => {
      cancelAnimationFrame(animationFrameId.current);
    }
  }, [imageData]);

  return <canvas ref={canvasRef}/>
}; 

export default TitleScreenCanvas;
