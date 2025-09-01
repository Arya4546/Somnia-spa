import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";

function StarField() {
  const ref = useRef();
  const points = useMemo(() => {
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const r = 1.8 + Math.random() * 2.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p[i*3+0] = r * Math.sin(phi) * Math.cos(theta);
      p[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      p[i*3+2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.02;
  });

  return (
    <group rotation={[0,0,0]}>
      <Points ref={ref} positions={points} stride={3}>
        <PointMaterial size={0.01} transparent depthWrite={false} />
      </Points>
    </group>
  );
}

export default function Stars3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <StarField />
    </Canvas>
  );
}
