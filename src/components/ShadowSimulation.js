import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const calculateSunPosition = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Convert current time to a fraction of the day (0-1 range)
  const dayFraction = (hours * 3600 + minutes * 60 + seconds) / (24 * 3600);

  // Calculate azimuth and elevation angles (approximation)
  const azimuth = dayFraction * 2 * Math.PI; // Full circle (0 to 2π) over the day
  const elevation = Math.PI / 4 * Math.sin(azimuth); // Sinusoidal elevation

  // Convert angles to a position vector
  const x = Math.cos(azimuth) * Math.cos(elevation);
  const y = Math.sin(elevation);
  const z = Math.sin(azimuth) * Math.cos(elevation);

  return [x * 10, y * 10, z * 10]; // Scale to desired distance
};

const ShadowSimulation = () => {
  const [sunPosition, setSunPosition] = useState(calculateSunPosition());

  useEffect(() => {
    const interval = setInterval(() => {
      setSunPosition(calculateSunPosition());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas shadows style={{ height: '600px' }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={sunPosition}
        intensity={1}
      />
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default ShadowSimulation;
