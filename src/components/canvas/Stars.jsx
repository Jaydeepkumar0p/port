import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, #0d0d2b, #01010a); /* Soft cosmic glow */
`;

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(7000), { radius: 1.5 }) // More points for density
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 12; // Slower rotation for smoothness
    ref.current.rotation.y -= delta / 18;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#e056fd"
          size={0.0025}  // Slightly larger for softer points
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8} // Softer glow effect
        />
      </Points>
    </group>
  );
};

const StyledStarsCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarsCanvas;
