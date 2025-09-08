import { useRef, useEffect } from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpColor(c1: number[], c2: number[], t: number) {
  return c1.map((v, i) => lerp(v, c2[i], t));
}

function rgbToCss(c: number[]) {
  return `rgba(${c[0]},${c[1]},${c[2]},${c[3] ?? 1})`;
}

function randomPastelColor() {
  return [
    50 + Math.random() * 100,
    50 + Math.random() * 100,
    255,
    0.3 + Math.random() * 0.2,
  ];
}

interface Circle {
  x: number;
  y: number;
  radius: number;
  colorA: number[];
  colorB: number[];
  t: number;
  speed: number;
  vx: number;
  vy: number;
}

type CanvasProps = {
  width: number;
  height: number;
  offset: number;
};

export default function CanvasBackground({ width, height, offset }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlesRef = useRef<Circle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = width;
    canvas.height = height;

    const circles: Circle[] = [];
    const count = 8;

    for (let i = 0; i < count; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 100 + Math.random() * 150,
        colorA: randomPastelColor(),
        colorB: randomPastelColor(),
        t: Math.random(),
        speed: 0.002 + Math.random() * 0.003,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    circlesRef.current = circles;

    // The solid bottom color to blend into (hex #A1C4FD)
    const bottomColor = [161, 196, 253, 1];

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw all circles with their radial gradients
      for (const c of circlesRef.current) {
        c.t += c.speed;
        if (c.t > 1) {
          c.t = 0;
          c.colorA = c.colorB;
          c.colorB = randomPastelColor();
        }

        c.x += c.vx;
        c.y += c.vy;
        if (c.x < -c.radius) c.x = width + c.radius;
        else if (c.x > width + c.radius) c.x = -c.radius;
        if (c.y < -c.radius) c.y = height + c.radius;
        else if (c.y > height + c.radius) c.y = -c.radius;

        const color = lerpColor(c.colorA, c.colorB, c.t);
        const gradient = ctx.createRadialGradient(
          c.x,
          c.y,
          0,
          c.x,
          c.y,
          c.radius
        );
        gradient.addColorStop(0, rgbToCss([...color.slice(0, 3), 0.6]));
        gradient.addColorStop(1, rgbToCss([...color.slice(0, 3), 0]));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw vertical gradient overlay to blend bottom with #A1C4FD
      const linearGradient = ctx.createLinearGradient(0, 0, 0, height);
      linearGradient.addColorStop(0, "rgba(161,196,253,0)"); // transparent top
      linearGradient.addColorStop(1, rgbToCss(bottomColor)); // solid bottom

      ctx.fillStyle = linearGradient;
      ctx.fillRect(0, 0, width, height);

      requestAnimationFrame(animate);
    }

    animate();
  }, [width, height, offset]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: `${offset}px`,
        left: 0,
        zIndex: 1,
        width: `${width}px`,
        height: `${height}px`,
        pointerEvents: "none",
      }}
    />
  );
}
