// == React Import
import React from 'react';

// == Import
import './about.scss';

import Contact from './Contact/Contact';

// == About Us page
const AboutUs = () => (


  <div className="about-container">
    <div className="left-section">
      <div className="AboutUs">
        About Us
      </div>
      <div className="about-text">
        Nulla magna officia aliqua ex sunt ex nostrud excepteur.
        Aliqua magna velit nostrud ipsum eiusmod ex eu ullamco fugiat.
        Veniam nulla duis aliquip exercitation culpa tempor tempor eiusmod
        in labore reprehenderit tempor est anim.

      </div>
    </div>
    <div className="right-section">
      <div className="presentation">
      <div className="profilepic"> </div> 

        <div className="text-table">
          Liv Audigane
          Sunt excepteur sunt consectetur incididunt duis fugiat est ullamco laborum ad ipsum.
        </div>
        <div className="profilepic" />

      </div>
      <div className="presentation">
      <div className="profilepic"> </div> 

        <div className="text-table">
          Simon
          Sunt excepteur sunt consectetur incididunt duis fugiat est ullamco laborum ad ipsum.
        </div>
      </div>

      <div className="presentation">
        <div className="text-table">
          Quentin Savigny

          Sunt excepteur sunt consectetur incididunt duis fugiat est ullamco laborum ad ipsum.
        </div>
        <div className="profilepic"/>
      </div>

      <div className="presentation">
      <div className="profilepic"> </div> 

        <div className="text-table">
          Piera Beaujard

          Sunt excepteur sunt consectetur incididunt duis fugiat est ullamco laborum ad ipsum.
        </div>
      </div>

      <div className="presentation">
        <div className="text-table">
          Gwen

          Sunt excepteur sunt consectetur incididunt duis fugiat est ullamco laborum ad ipsum.
        </div>
        <div className="profilepic"> </div> 
      </div>

    </div>
    <Contact className="contactform" />
  </div>



);

// == Export
export default AboutUs;
