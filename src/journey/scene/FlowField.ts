/**
 * One continuous particle system that re-forms as the page scrolls.
 * Formations: 0 streams (nine feeds normalized into one), 1 fleet (200+ deployments),
 * 2 ambient (recedes behind dense content), 3 vault (air-gapped enclosure), 4 beam (contact).
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  NormalBlending,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from "three";

export interface SceneState {
  from: number;
  to: number;
  mix: number;
  tone: number; // 0 light page, 1 dark page
}

const VERT = /* glsl */ `
uniform float uTime;
uniform float uFrom;
uniform float uTo;
uniform float uMix;
uniform float uSize;
uniform float uShift;
uniform float uCompact;
attribute vec4 aSeed;
attribute vec3 aFleet;
attribute vec3 aVault;
attribute vec3 aAmbient;
varying float vAccent;
varying float vAlpha;
varying float vWarn;

mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

vec3 streams(out float accent, out float warn){
  float lane = floor(aSeed.x * 9.0);
  float speed = 0.035 + aSeed.z * 0.03;
  float t = fract(aSeed.y + uTime * speed);
  float x = mix(-3.3, 4.8, t);
  float conv = smoothstep(-1.2, 2.3, x);
  float laneY = (lane - 4.0) * 0.56;
  // each feed has its own shape before it is normalized
  float wob = sin(x * (0.9 + lane * 0.23) + lane * 1.7 + uTime * 0.25) * (0.1 + 0.05 * mod(lane, 3.0));
  float jitter = (aSeed.w - 0.5) * 0.24;
  float y = (laneY + wob + jitter) * (1.0 - conv) + jitter * 0.22 * conv;
  float z = (sin(lane * 2.4) * 0.9 + (aSeed.z - 0.5) * 0.3) * (1.0 - conv);
  // a few orders fail at the provider and drop to the dead-letter queue
  warn = step(0.955, aSeed.w) * step(lane, 2.5);
  float fall = warn * smoothstep(-1.4, 0.4, x);
  y -= fall * (1.35 + aSeed.z * 0.3);
  x = mix(x, 0.9 + (aSeed.x - 0.5) * 1.8, fall * 0.92);
  accent = conv;
  vAlpha = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.92, 1.0, t));
  return vec3(x + uShift, y, z);
}

vec3 formation(float id, out float accent, out float warn){
  accent = 0.0; warn = 0.0;
  if (id < 0.5) return streams(accent, warn);
  vAlpha = 1.0;
  if (id < 1.5) {
    vec3 p = aFleet;
    p.y += sin(uTime * 0.6 + aFleet.x * 1.4 + aFleet.z) * 0.035;
    p.xz = rot(-0.5 + sin(uTime * 0.08) * 0.08) * p.xz;
    p.yz = rot(0.62) * p.yz;
    accent = step(0.82, aSeed.y);
    return p + vec3(uShift * 0.95, -0.1, 0.0);
  }
  if (id < 2.5) {
    vec3 p = aAmbient;
    p.y += sin(uTime * 0.2 + aSeed.x * 6.28) * 0.25;
    p.x += cos(uTime * 0.15 + aSeed.y * 6.28) * 0.25;
    vAlpha = 0.0;
    return p;
  }
  if (id < 3.5) {
    vec3 p = aVault;
    p.xz = rot(uTime * 0.07) * p.xz;
    p.yz = rot(0.25) * p.yz;
    accent = step(length(aVault), 1.5);
    return p + vec3(uShift * 1.2, 0.0, 0.0);
  }
  float t = fract(aSeed.y + uTime * (0.02 + aSeed.z * 0.03));
  float x = mix(-9.0, 9.0, t);
  accent = 1.0;
  vAlpha = smoothstep(0.0, 0.08, t) * (1.0 - smoothstep(0.9, 1.0, t));
  float y = 3.0 + (aSeed.w - 0.5) * 0.06 + sin(x * 0.6 + uTime * 0.4) * 0.04;
  return vec3(x, y / mix(1.0, 0.72, uCompact), (aSeed.x - 0.5) * 0.2);
}

void main(){
  float a0; float w0; float a1; float w1;
  vec3 p0 = formation(uFrom, a0, w0);
  float alpha0 = vAlpha;
  vec3 p1 = formation(uTo, a1, w1);
  float alpha1 = vAlpha;
  // stagger so particles peel away instead of sliding as one sheet
  float m = smoothstep(0.0, 1.0, clamp(uMix * 1.5 - aSeed.x * 0.5, 0.0, 1.0));
  vec3 p = mix(p0, p1, m);
  p.xy *= mix(1.0, 0.72, uCompact);
  vAccent = mix(a0, a1, m);
  vWarn = mix(w0, w1, m);
  vAlpha = mix(alpha0, alpha1, m);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * (0.75 + aSeed.z * 0.6) / -mv.z;
}
`;

const FRAG = /* glsl */ `
precision mediump float;
uniform vec3 uInk;
uniform vec3 uAccent;
uniform vec3 uWarn;
uniform float uOpacity;
varying float vAccent;
varying float vAlpha;
varying float vWarn;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float disc = 1.0 - smoothstep(0.34, 0.5, d);
  if (disc < 0.01) discard;
  vec3 c = mix(uInk, uAccent, vAccent);
  c = mix(c, uWarn, vWarn);
  gl_FragColor = vec4(c, disc * vAlpha * uOpacity * mix(0.62, 1.0, max(vAccent, vWarn)));
}
`;

const LIGHT = { ink: new Color("#0e1b2c"), accent: new Color("#1f4fd8"), warn: new Color("#b4610f") };
const DARK = { ink: new Color("#b9c8dc"), accent: new Color("#86aaff"), warn: new Color("#f0a04b") };

function rand(seed: number) {
  // mulberry32: deterministic so the scene looks identical on every visit
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class FlowField {
  private renderer: WebGLRenderer;
  private scene = new Scene();
  private camera = new PerspectiveCamera(38, 1, 0.1, 60);
  private material: ShaderMaterial;
  private geometry = new BufferGeometry();
  private raf = 0;
  private running = false;
  private start = performance.now();
  private tone = 0;
  private pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  private state: SceneState = { from: 0, to: 0, mix: 0, tone: 0 };
  private animate: boolean;
  private baseOpacity = 1;

  constructor(private canvas: HTMLCanvasElement, opts: { animate: boolean }) {
    this.animate = opts.animate;
    const small = window.innerWidth < 760;
    const count = small ? 2600 : 7000;
    this.renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
    this.renderer.setClearColor(0x000000, 0);

    const r = rand(20221101);
    const seed = new Float32Array(count * 4);
    const fleet = new Float32Array(count * 3);
    const vault = new Float32Array(count * 3);
    const ambient = new Float32Array(count * 3);
    const COLS = 16;
    const ROWS = 13; // 208 cells: one per deployment in a 200+ fleet
    for (let i = 0; i < count; i++) {
      seed.set([r(), r(), r(), r()], i * 4);
      const cell = i % (COLS * ROWS);
      const cx = (cell % COLS) - (COLS - 1) / 2;
      const cz = Math.floor(cell / COLS) - (ROWS - 1) / 2;
      fleet.set([cx * 0.31 + (r() - 0.5) * 0.13, (r() - 0.5) * 0.13, cz * 0.31 + (r() - 0.5) * 0.14], i * 3);
      if (i % 4 === 0) {
        // workloads sealed inside
        const g = 3;
        const k = Math.floor(r() * g * g * g);
        vault.set(
          [
            ((k % g) - 1) * 0.6 + (r() - 0.5) * 0.16,
            ((Math.floor(k / g) % g) - 1) * 0.6 + (r() - 0.5) * 0.16,
            (Math.floor(k / (g * g)) - 1) * 0.6 + (r() - 0.5) * 0.16,
          ],
          i * 3
        );
      } else {
        // the enclosure: latitude rings on a sphere
        const ring = Math.floor(r() * 15);
        const phi = ((ring + 0.5) / 15) * Math.PI;
        const theta = r() * Math.PI * 2;
        const R = 2.3;
        vault.set([R * Math.sin(phi) * Math.cos(theta), R * Math.cos(phi), R * Math.sin(phi) * Math.sin(theta)], i * 3);
      }
      ambient.set([(r() - 0.5) * 24, (r() - 0.5) * 13, -3 - r() * 7], i * 3);
    }
    // position is unused by the shader but three needs it for draw range
    this.geometry.setAttribute("position", new BufferAttribute(new Float32Array(count * 3), 3));
    this.geometry.setAttribute("aSeed", new BufferAttribute(seed, 4));
    this.geometry.setAttribute("aFleet", new BufferAttribute(fleet, 3));
    this.geometry.setAttribute("aVault", new BufferAttribute(vault, 3));
    this.geometry.setAttribute("aAmbient", new BufferAttribute(ambient, 3));

    this.material = new ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: NormalBlending,
      uniforms: {
        uTime: { value: 0 },
        uFrom: { value: 0 },
        uTo: { value: 0 },
        uMix: { value: 0 },
        uSize: { value: 30 },
        uShift: { value: 0 },
        uCompact: { value: 0 },
        uOpacity: { value: 1 },
        uInk: { value: LIGHT.ink.clone() },
        uAccent: { value: LIGHT.accent.clone() },
        uWarn: { value: LIGHT.warn.clone() },
      },
    });
    const points = new Points(this.geometry, this.material);
    points.frustumCulled = false;
    this.scene.add(points);
    this.camera.position.set(0, 0, 11);
    this.resize();
  }

  resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    const u = this.material.uniforms;
    const wide = w >= 1024;
    u.uSize.value = (wide ? 34 : 24) * dpr * (h / 900);
    u.uShift.value = wide ? 2.6 : 0; // keep formations clear of the text column on desktop
    u.uCompact.value = wide ? 0 : 1;
    this.baseOpacity = wide ? 1 : 0.3;
    this.camera.position.z = wide ? 11 : 13;
    if (!this.running) this.draw();
  };

  setState(next: SceneState) {
    this.state = next;
    if (!this.running) this.draw();
  }

  setPointer(x: number, y: number) {
    this.pointer.tx = x;
    this.pointer.ty = y;
  }

  private draw = () => {
    const u = this.material.uniforms;
    u.uTime.value = this.animate ? (performance.now() - this.start) / 1000 : 14;
    u.uFrom.value = this.state.from;
    u.uTo.value = this.state.to;
    u.uMix.value = this.state.mix;
    this.tone += (this.state.tone - this.tone) * (this.running ? 0.08 : 1);
    (u.uInk.value as Color).lerpColors(LIGHT.ink, DARK.ink, this.tone);
    (u.uAccent.value as Color).lerpColors(LIGHT.accent, DARK.accent, this.tone);
    (u.uWarn.value as Color).lerpColors(LIGHT.warn, DARK.warn, this.tone);
    u.uOpacity.value = this.baseOpacity < 1 ? this.baseOpacity + this.tone * 0.25 : 1;
    this.material.blending = this.tone > 0.5 ? AdditiveBlending : NormalBlending;
    this.pointer.x += (this.pointer.tx - this.pointer.x) * 0.05;
    this.pointer.y += (this.pointer.ty - this.pointer.y) * 0.05;
    this.scene.rotation.y = this.pointer.x * 0.08;
    this.scene.rotation.x = this.pointer.y * 0.05;
    this.renderer.render(this.scene, this.camera);
  };

  private loop = () => {
    this.draw();
    this.raf = requestAnimationFrame(this.loop);
  };

  play() {
    if (this.running || !this.animate) {
      this.draw();
      return;
    }
    this.running = true;
    this.raf = requestAnimationFrame(this.loop);
  }

  pause() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  dispose() {
    this.pause();
    this.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();
  }
}
