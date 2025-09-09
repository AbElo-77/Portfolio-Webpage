import { useEffect, useRef } from 'react';
import cloudImage from '../assets/cloud.png';
import birdImage from '../assets/birdImage.png'

type CanvasProps = {
  width: number;
  height: number;
  offset: number;
  cloudNum: number
};

type Cloud = {
  x: number;
  y: number;
  speed: number;
  scale: number;
};

type Bird = {
  x: number;
  y: number;
  speed: number;
  scale: number;
}

export default function ParticleTextCanvas({ width, height, offset, cloudNum}: CanvasProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  height = height + 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');

    if (!ctx || ctx == null) return;

    canvas.width = width;
    canvas.height = height;

    const clouds: Cloud[] = [];
    const cloudImg = new Image();
    cloudImg.src = cloudImage; 

    cloudImg.onload = () => {
      for (let i = 0; i < cloudNum; i++) {
        clouds.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.9,
          speed: 0.2 + Math.random() * 0.6,
          scale: 0.1 + Math.random() * 0.2,
        });
      }

      const birds: Bird[] = [];
      const birdImg = new Image();
      birdImg.src = birdImage;
        
      birdImg.onload = () => {
        for (let i = 0; i < 2; i++) {
        birds.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.4 + height,
          speed: 0.2 + Math.random() * 0.5,
          scale: 0.1 + Math.random() * 0.1,
        })
      }
    }

      function animate() {
        ctx!.clearRect(0, 0, width, height);

        for (let cloud of clouds) {
          cloud.x += cloud.speed;
          if (cloud.x > width) {
            cloud.x = -cloudImg.width * cloud.scale;
            cloud.y = Math.random() * height * 0.9;
          }

          ctx!.drawImage(
            cloudImg,
            cloud.x,
            cloud.y,
            cloudImg.width * cloud.scale,
            cloudImg.height * cloud.scale
          );
        }

        /* for (let bird of birds) {
          bird.x += bird.speed;
          if (bird.x > width) {
            bird.x = -birdImg.width * bird.scale;
            bird.y = Math.random() * height * 0.5 + height * 0.2;
          }

          ctx!.drawImage(
          birdImg, 
          bird.x, 
          bird.y,
          birdImg.width * bird.scale, 
          birdImg.height * bird.scale
          )
        } */

      

        requestAnimationFrame(animate);
    }


    animate();
    };
  }, [width, height]);

  return (
  <>
    <video
    ref={videoRef}
    src={""}
    style={{display: 'none'}}
    playsInline
    >
    </video>
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: offset,
        left: 0,
        width: `${width}px`,
        height: `${height}px`,
        zIndex: 1,
        pointerEvents: 'none',
        backgroundColor: 'transparent',
      }}
    />
  </>
  );
}
