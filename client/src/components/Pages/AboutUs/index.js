// == React Import
import React from 'react';

// == Import
import './about.scss';
import Liv from '../../../assets/images/liv.png';
import Piera from '../../../assets/images/piera.png';
import Simon from '../../../assets/images/simon.png';
import Gwen from '../../../assets/images/gwen.png';
import Quentin from '../../../assets/images/quentin.png';

import Contact from './Contact/Contact';

// == About Us page
const AboutUs = () => (

  <div className="presentation">
    <div className="about-project">
      <h2 className="presentation-title">
        A propos d'Orizon
      </h2>
      <div className="presentation-about">
        Orizon est une plateforme informative sur la conquête spatiale des prochaines
        années à destination des enfants et adolescents entre 10 et 17 ans. Spoutnik,
        notre petit compagnon de voyage, emmène l'enfant dans un voyage intergalactique,
        le guide au travers du site et lui propose de répondre à un quiz.

      </div>
    </div>

    <h2 className="presentation-title">L'equipage</h2>
    <div className="about-team">
      <div className="presentation-block">
        <div className="presentation-block-profilepic"> <img src={Liv} className="staff_picture" /> </div>

        <div className="presentation-block-description">

          <p className="presentation-block-name">Liv Audigane</p>
          <p className="presentation-block-role">Product owner</p>
          <p className="presentation-block-role">Développeuse full-stack</p>
          <a className="linkedin" href="https://www.linkedin.com/in/liv-audigane/">Linkedin</a>

        </div>

      </div>

      <div className="presentation-block">
        <div className="presentation-block-profilepic"> <img src={Piera} className="staff_picture" /> </div>
        <div className="presentation-block-description">

          <p className="presentation-block-name">Pierangela Beaujard</p>
          <p className="presentation-block-role">Directrice artistique</p>
          <p className="presentation-block-role">Développeuse front-end</p>
          <a className="linkedin" href="https://www.linkedin.com/in/pierangela-beaujard-9372b61bb/">Linkedin</a>

        </div>

      </div>

      <div className="presentation-block">
        <div className="presentation-block-profilepic"> <img src={Simon} className="staff_picture" /> </div>

        <div className="presentation-block-description">

          <p className="presentation-block-name">Simon Jacquemin</p>
          <p className="presentation-block-role">Lead développeur back-end</p>
          <p className="presentation-block-role">+ Développeur full-stack</p>
          <a className="linkedin" href="https://www.linkedin.com/in/simon-jacquemin">Linkedin</a>

        </div>

      </div>

      <div className="presentation-block">
        <div className="presentation-block-profilepic"> <img src={Quentin} className="staff_picture" /> </div>
        <div className="presentation-block-description">

          <p className="presentation-block-name">Quentin Savigny</p>
          <p className="presentation-block-role">Développeur front-end</p>
          <a className="linkedin" href="https://www.linkedin.com/in/quentin-savigny01">Linkedin</a>

        </div>
      </div>

      <div className="presentation-block">
        <div className="presentation-block-profilepic"> <img src={Gwen} className="staff_picture" /> </div>

        <div className="presentation-block-description">

          <p className="presentation-block-name">Gwendolyne Stelmaszyk</p>
          <p className="presentation-block-role">Lead développeuse front-end</p>
          <a className="linkedin" href="https://www.linkedin.com/in/gwendolyne-stelmaszyk/">Linkedin</a>

        </div>
      </div>

    </div>
    <h2 className="presentation-title">Nous contacter</h2>

    <Contact className="contactform" />
  </div>

);

// == Export
export default AboutUs;
