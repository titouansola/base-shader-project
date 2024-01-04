import { Canvas } from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { Plane } from './Plane.tsx';

export function App() {
  return (
    <Canvas>
      <OrthographicCamera
        makeDefault
        left={0}
        right={1}
        top={1}
        bottom={0}
        near={0}
        far={2}
        position={[0, 0, 1]}
      />
      <Plane />
    </Canvas>
  );
}
