import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef } from "react";

const Moon = () => {
  const moonRef = useRef<THREE.Mesh>(null!);

  // Use the string path directly
  const moonTexture = useTexture("/assets/img/moon-texture.jpg");

  // Rotate the moon continuously
  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={moonRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
};

export default Moon;
