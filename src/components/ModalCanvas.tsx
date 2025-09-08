import { useRef, useEffect } from 'react';

type CanvasProps = {
  width: number;
  height: number;
  color: string; 
};

function ModalCanvas({ width, height, color }: CanvasProps) {
  const modalCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = modalCanvas.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    let mouseX = width / 2;
    let mouseY = height / 2;
    const radius = 150;

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMove);

    function draw() {
      if (!ctx) return; 

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, radius);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, [width, height, color]);

  return <canvas ref={modalCanvas} 
            style={{
              width: `${width}px`,
              height: `${height}px`,
              zIndex: 9999,
              display: 'block',
              backgroundColor: 'green',
              position: 'relative'
            }}
  />;
}

export default ModalCanvas;
