uniform float t;
uniform vec2 resolution;

varying vec2 p;

void main() {
    gl_FragColor = vec4(p, 1., 1.);
}
