import {
  Clock,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
} from 'three';
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

const getResolution = () => {
  return new Vector2(window.innerWidth / 100, window.innerHeight / 100);
};

const canvas = document.querySelector('canvas#root') as HTMLCanvasElement;

const scene = new Scene();

const camera = new OrthographicCamera(0, 1, 1, 0, 0, 2);
camera.position.set(0, 0, 1);
scene.add(camera);

const plane = new Mesh(
  new PlaneGeometry(),
  new ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      t: { value: 0 },
      resolution: { value: getResolution() },
    },
  }),
);
plane.position.set(0.5, 0.5, 0);
scene.add(plane);

const renderer = new WebGLRenderer({ canvas });

const setRendererSize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};
setRendererSize();

window.addEventListener('resize', () => {
  plane.material.uniforms.resolution.value = getResolution();
  camera.updateProjectionMatrix();
  setRendererSize();
});

const clock = new Clock();
const tick = () => {
  plane.material.uniforms.t.value = clock.elapsedTime;
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
