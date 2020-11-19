import React from 'react';
import * as THREE from 'three';
import background from './background.jpg';
import moon from './moon.jpg';
import mars from './mars.jpg';
import jupiter from './jupiter.jpg';
import marker from './dot.png';
import store from '../../../../store';

import '../style.scss';

class Scene extends React.Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentDidMount() {
    this.renderPlanet();
    window.addEventListener('resize', this.onWindowResize, false);
  }

  componentDidUpdate() {
    this.stop();
    this.mount.innerHTML = '';
    this.renderPlanet();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.innerHTML = '';
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  renderPlanet = () => {
    const togglePlanet = (planet) => {
      switch (planet) {
        case 'moon': return moon;
        case 'mars': return mars;
        case 'jupiter': return jupiter;
        default:
          return moon;
      }
    };
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25, width / height, 0.03, 1000,
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const texture = new THREE.TextureLoader().load(togglePlanet(this.props.currentPlanet));
    const material = new THREE.MeshBasicMaterial({ map: texture });
    scene.background = new THREE.TextureLoader().load(background);

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

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
    delete this.frameId;
  }

  animate() {
    this.scene.rotation.y += 0.004;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className="planet__position">
        <div
          className="planet__rotation"
          ref={(mount) => {
            this.mount = mount;
          }}
        />
      </div>
    );
  }
}

export default Scene;
