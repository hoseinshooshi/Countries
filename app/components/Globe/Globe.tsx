'use client';

import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let frame = 0;
    let phi = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(2, window.devicePixelRatio || 1),
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.2,
      dark: 0, // light mode
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      mapBaseBrightness: 0,
      baseColor: [1, 1, 1],
      markerColor: [0.2, 0.4, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03, id: 'sf' },
        { location: [40.7128, -74.006], size: 0.03, id: 'nyc' },
      ],
      arcs: [
        { from: [37.7595, -122.4367], to: [40.7128, -74.006] },
      ],
      arcColor: [0.2, 0.4, 1],
      arcWidth: 0.5,
      arcHeight: 0.3,
      markerElevation: 0.05,
      scale: 1,
      opacity: 1,
    });

    const animate = () => {
      phi += 0.005;
      globe.update({ phi });
      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      globe.destroy();
    };
  }, []);

  return (
    <div
      className="Globe"
      style={{
        display: 'grid',
        gap: 12,
        justifyItems: 'center',
        color: '#111',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          maxWidth: 600,
          aspectRatio: '1 / 1',
          display: 'block',
        }}
      />
    </div>
  );
}