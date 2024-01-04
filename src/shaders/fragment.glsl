uniform float t;
uniform vec2 resolution;

varying vec2 vUv;

void main() {
    gl_FragColor = vec4(vUv, 1.0, 1.0);
}
