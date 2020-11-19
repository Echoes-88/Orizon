// == React Import
import React from 'react';

// == Import
import './styles.scss';

import baker from './img/baker.jpg';
import belkastrelka from './img/belka-strelka.jpg';

import Enos from './img/Enos.jpg';

import felicette from './img/felicette.jpg';

import Ham from './img/Ham.jpg';
import LAIKA from './img/LAIKA.jpg';



// == General Conditions page
const Animals = () => (
    <div className="wrapper">
      <div className="card-animals">

        <img src={LAIKA}/>
        <div className="info">
          <h1 className="animal-title">LAIKA</h1>
          <p>Vol: Décembre 1960<br/>
            Altitude: Vol orbital<br/>
            Fusée: Spoutnik 2
          </p>
        </div>
      </div>

      <div className="card-animals">

        <img src={baker}/>
        <div className="info">
          <h1 className="animal-title">BAKER</h1>
          <p>Vol: Novembre 1957<br/>
            Altitude: Vol orbital<br/>
            Fusée: Jupiter<br/>
            Animaux: Able, un macaque<br/>
            Décédé 4 jours après son vol suite à une opération pour retirer une électrode.
          </p>
        </div>
      </div>

      <div className="card-animals">

        <img src={belkastrelka}/>
        <div className="info">
          <h1 className="animal-title">BELKA et STRELKA</h1>
          <p>
            Vol: AOût 1960<br/>
            Altitude: Vol orbital<br/>
            Fusée: Spoutnik 5<br/>
            Animaux: 1 lapin gris, 40 souris, 2 rats...
          </p>
        </div>
      </div>

      <div className="card-animals">

        <img src={Ham}/>
        <div className="info">
          <h1 className="animal-title">HAM</h1>
          <p>
            Vol: Janvier 1961<br/>
            Altitude: 250km<br/>
            Fusée: Redstone<br/>
            Animaux: Chimpanzé
          </p>
        </div>
      </div>

      <div className="card-animals">

        <img src={Enos}/>
        <div className="info">
          <h1 className="animal-title">ENOS</h1>
          <p>
            Vol: Novembre 1961<br/>
            Altitude: Vol orbital<br/>
            Fusée: Mercury-Atlas 5<br/>
            Animaux: Chimpanzé<br/>
            Décédé suite à une maladie 1 an après le vol
          </p>
        </div>
      </div>

      <div className="card-animals">

        <img src={felicette}/>
        <div className="info">
          <h1 className="animal-title">FELICETTE</h1>
          <p>
            Vol: Novembre 1957<br/>
            Altitude: 157km<br/>
            Fusée: Véronique AGI n°47<br/>
            Animaux: Chat
          </p>
        </div>
      </div>

    </div>
);

// == Export
export default Animals;
