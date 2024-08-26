import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";

const Earth: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null!);

  const earthTexture = useTexture("/assets/img/earth-texture-2.jpg");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={earthRef} position={[-5, 3, -10]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

export default Earth;
