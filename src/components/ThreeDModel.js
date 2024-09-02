import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDModel = ({ data }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current; // Store ref in a variable
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(light);

    // Add a basic cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function
    return () => {
      // Make sure to only attempt to clean up if the mount is still present
      if (mount) {
        while (mount.firstChild) {
          mount.removeChild(mount.firstChild);
        }
      }
    };
  }, [data]); // Add dependencies if necessary

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeDModel;
