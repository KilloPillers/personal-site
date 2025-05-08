import PoissonDiskSampling from 'poisson-disk-sampling';
import React, { useRef, useEffect } from 'react';

const RADIUS_FACTOR = 10;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const BannerCanvas = ({ imageData }) => {
  const canvasRef = useRef(null);
  const samplerRef = useRef(null);
  const pointsRef = useRef([]);
  const animationFrameId = useRef();

  useEffect(() => {
    if (!imageData) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const scaleFactor = window.devicePixelRatio || 1;

    // Match canvas resolution to imageData and apply HiDPI scale
    canvas.width = imageData.width * scaleFactor;
    canvas.height = imageData.height * scaleFactor;
    canvas.style.width = `${imageData.width}px`;
    canvas.style.height = `${imageData.height}px`;
    ctx.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);

    const canvasWidth = imageData.width;
    const canvasHeight = imageData.height;

    // Scale radius based on canvas width (or height)
    const radius = canvasWidth * 0.001; // 0.8% of width

    const baseLength = Math.sqrt(imageData.width * imageData.height);

    const minDistance = baseLength * 0.0075;
    const maxDistance = baseLength * 0.0075;

    samplerRef.current = new PoissonDiskSampling({
      shape: [imageData.width, imageData.height],
      minDistance: minDistance,
      maxDistance: maxDistance,
      tries: 15,
      distanceFunction: () => radius / 20,
    });

    pointsRef.current = [];
    const firstPoint = samplerRef.current.addPoint([0, randomInt(0, imageData.height)]);
    if (firstPoint) pointsRef.current.push(firstPoint);

    const drawFrame = () => {
      for (let i = 0; i < 300; i++) {
        const newPoint = samplerRef.current.next();
        if (newPoint) pointsRef.current.push(newPoint);
        else return;
      }

      ctx.clearRect(0, 0, imageData.width, imageData.height);
      pointsRef.current.forEach(([x, y]) => {
        const index = (Math.floor(y) * imageData.width + Math.floor(x)) * 4;
        const r = imageData.data[index];
        const g = imageData.data[index + 1];
        const b = imageData.data[index + 2];
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    return () => cancelAnimationFrame(animationFrameId.current);
  }, [imageData]);

  return <canvas ref={canvasRef} />;
};

export default BannerCanvas;
