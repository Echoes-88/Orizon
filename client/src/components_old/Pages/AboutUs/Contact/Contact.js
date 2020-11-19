import React from 'react';
import emailjs from 'emailjs-com';

import './contact.scss';

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('orizon_gmail', 'template_wmf8psf', e.target, 'user_CC0TOOfxr0Who8phJJfT4')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
