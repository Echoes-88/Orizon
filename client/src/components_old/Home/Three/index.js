import React from 'react';
import * as THREE from 'three';
import Moon from './moon.jpg';

class Scene extends React.Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentDidMount() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25, width / height, 0.03, 1000,
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const texture = new THREE.TextureLoader().load(Moon);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const sphere = new THREE.Mesh(geometry, material);

    camera.position.z = 4;
    scene.add(sphere);
    renderer.setClearColor(0xffffff, 0);
    renderer.setSize(width, height);

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.material = material;
    this.sphere = sphere;

    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    // this.cube.rotation.x += 0.01;
    this.sphere.rotation.y += 0.004;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    window.addEventListener('resize', this.onWindowResize, false);
    return (
      <div
        // style={{ width: '70vh', height: '70vh', position: 'fixed' }}
        ref={(mount) => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Scene;
