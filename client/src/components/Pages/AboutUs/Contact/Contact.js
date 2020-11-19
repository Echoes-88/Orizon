import React, { useState } from 'react';

// Module to send email directly from client side
import emailjs from 'emailjs-com';

// Module to enable google captcha
import ReCAPTCHA from 'react-google-recaptcha';

import './contact.scss';

export default function Contact() {
  // Boolean to hide form when submitted
  const [formAnswered, setForm] = useState(false);

  // Local states to save data from form
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [message, setMessage] = useState('');

  // Boolean to display confirmation message when captcha okay
  const [confirmationMessage, setConfirmationMessage] = useState(false);

  // Boolean if error with captcha
  const [errorCaptcha, setErrorCaptcha] = useState(false);

  // Sending data to emailJS

  function sendEmail(captchaValue) {
    const formWithCaptcha = {
      from_name: username,
      reply_to: useremail,
      message,
      'g-recaptcha-response': captchaValue,
    };
    emailjs.send(
      'orizon_gmail',
      'template_wmf8psf',
      formWithCaptcha,
      'user_CC0TOOfxr0Who8phJJfT4',
    )
      .then((result) => {
        console.log(result.text);
        setConfirmationMessage(true);
      }).catch((error) => {
        console.log(error.text);
        setErrorCaptcha(true);
      }).finally(() => {
        setForm(false);
      });
  }

  function displayCaptcha(e) {
    e.preventDefault();
    setForm(true);
  }

  return (

    <div className="form">

      {confirmationMessage
       && <div> Le formulaire a bien été envoyé, merci !</div>}

      {!confirmationMessage && errorCaptcha
       && <div> L'envoi du formulaire n'a pu aboutir, merci de réessayer. </div>}

      {!formAnswered

    && (
    <form className="contact-form" onSubmit={displayCaptcha}>
      <label className="contact-label">Nom
        <input
          className="contact-form-field"
          type="text"
          name="user_name"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
      </label>
      <label className="contact-label">E-mail
        <input
          className="contact-form-field"
          type="email"
          name="user_email"
          onChange={(event) => {
            setUseremail(event.target.value);
          }}
        />
      </label>
      <label className="contact-label">Message
        <br />
        <input
          type="textarea"
          className="contact-message-field"
          name="message"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </label>
      <input className="contact-button" type="submit" value="Envoyer" />
    </form>
    )}

      {formAnswered && (
      <ReCAPTCHA
        className="contact-form"
        sitekey="6LfdRd0ZAAAAAB4ctIpMH3gBGdfHH7nDToAyb6aY"
        onChange={sendEmail}
      />
      )}

    </div>

  );
}
