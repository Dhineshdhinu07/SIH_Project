import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Viewer = () => {
  return (
    <div>
      <h2>3D City Model Viewer</h2>
      <Canvas style={{ height: '600px' }}>
        <Suspense fallback={null}>
          {/* Add 3D models or simple geometries */}
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Viewer;
