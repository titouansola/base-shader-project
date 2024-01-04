import { useRef } from 'react';
import { ShaderMaterial, Vector2 } from 'three';
import { useFrame } from '@react-three/fiber';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

export function Plane() {
  const materialRef = useRef<ShaderMaterial>(null);
  useFrame((state) => {
    const material = materialRef.current;
    if (!material) return;
    //
    material.uniforms.t.value = state.clock.elapsedTime;
    material.uniforms.resolution.value = resolutionVector();
  });
  return (
    <mesh position={[0.5, 0.5, 0]}>
      <planeGeometry />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          t: { value: 0 },
          resolution: { value: resolutionVector() },
        }}
      />
    </mesh>
  );
}

function resolutionVector() {
  return new Vector2(window.innerWidth, window.innerHeight);
}
