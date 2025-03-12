import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive
      object={earth.scene}
      scale={3.2}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1.5, 2]} // Slightly enhanced for sharper visuals
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
        position: [-4, 3, 8], // Adjusted for a smoother perspective
      }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        castShadow
      />
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.8} // Smooth, controlled rotation speed
          enableZoom={false}
          dampingFactor={0.1} // Adds buttery-smooth motion
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
