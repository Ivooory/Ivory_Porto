import { useEffect, useRef } from 'react';

export default function Ferrofluid({
  colors = ['#3b82f6', '#1d4ed8', '#60a5fa'],
  speed = 0.4,
  scale = 1.5,
  glow = 1.8,
  mouseInteraction = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Konfigurasi MetaBalls / Fluid Blobs
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      if (!mouseInteraction) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Inisialisasi titik fluid
    const numPoints = 6;
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed * 2,
        vy: (Math.random() - 0.5) * speed * 2,
        radius: (Math.random() * 150 + 100) * scale,
        color: colors[i % colors.length],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01 * speed;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update & Draw Blobs dengan Radial Gradient
      points.forEach((point, index) => {
        // Gerakan sinusoidal alami
        point.x += point.vx + Math.sin(time + index) * 0.8;
        point.y += point.vy + Math.cos(time + index) * 0.8;

        // Bounce dari boundary
        if (point.x < -100 || point.x > width + 100) point.vx *= -1;
        if (point.y < -100 || point.y > height + 100) point.vy *= -1;

        // Reaksi terhadap mouse
        if (mouseInteraction) {
          const dx = mouse.x - point.x;
          const dy = mouse.y - point.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 300) {
            point.x += (dx / dist) * 0.5;
            point.y += (dy / dist) * 0.5;
          }
        }

        // Draw Soft Glow Gradient
        const gradient = ctx.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          point.radius * glow
        );

        gradient.addColorStop(0, point.color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius * glow, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, speed, scale, glow, mouseInteraction]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block filter blur-[40px]"
    />
  );
}