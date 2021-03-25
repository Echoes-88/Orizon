// == React Import
import React, { useState, useEffect } from 'react';

import Field from '../../../containers/Field';

import axios from 'axios';

import { adressIp } from '../../../config';

// == Import
import './styles.scss';

// == Profile page
const Profile = ({
  username, lastname, firstname, email, password, idString, quiz, updateProfile, checkAvatar, hasAvatar
}) => {

  const handleOnSubmit = (event) => {
    event.preventDefault();
    updateProfile();
  };

  return (
    <div className="profilepage">
      <div className="profilepage__usercard">
        <div className="profilepage__infos"><div className="form_adjust">
          {hasAvatar && (
            <img className="profile_avatar" alt={username} src={`${adressIp}/${idString}`} />
          )}
 
          <form method="POST" action={`${adressIp}/api/upload/${idString}`} encType="multipart/form-data">
            <label className="fieldLabel"> Image de profil
              <input
                type="file"
                name={idString}
                className="button_file"
              />
              <div className="profile__validationButtons">
                <button
                  type="submit"
                  name="btn_upload_profile_pic"
                  value="Envoyer"
                  className="validationButtons"
                > Envoyer
                </button>
              </div>
            </label>
          </form>
          </div>

          <form method="POST" onSubmit={handleOnSubmit}>

            <label className="fieldLabel"> Pseudo
              <Field
                type="text"
                name="username"
                placeholder={username}
                valueInput={username}
                />
            </label>
            <label className="fieldLabel"> Nom
              <Field
                type="text"
                name="lastname"
                placeholder={lastname}
                valueInput={lastname}
                />
            </label>
            <label className="fieldLabel"> Prénom
              <Field
                type="text"
                name="firstname"
                valueInput={firstname}
                />
            </label>
            <label className="fieldLabel"> E-mail
              <Field
                type="email"
                name="email"
                valueInput={email}
                />
            </label>
            <label className="fieldLabel"> Mot de passe
              <Field
                type="password"
                name={password}
                placeholder="password"
                />
            </label>
            <div className="profile__validationButtons">
              <button
                type="submit"
                className="cancelButton"
                > Annuler
              </button>
              <button
                type="submit"
                className="validationButtons"
                > Valider
              </button>
            </div>
          </form>

        </div>
      </div>
      <div className="profilepage__quizresults">
        <h2 className="profilepage__quizresult__mainTitle">Résultats aux quiz</h2>
        <div className="profilepage__quizlevel">
        {quiz && (
          <>
          {quiz.map((elt) => ( 

          <div className="profilepage__quizresult" key={elt.title}>
            <h3 className="profilepage__quizresult__title">{elt.title}</h3>
            <p className="profilepage__quizresult__text">Ton dernier score à ce quiz : {elt.user_plays_quiz.score}/{elt.nbr_of_questions}</p>
            </div>

          ))}
          </>
        )}


        </div>
      </div>

    </div>
  );
};

export default Profile;
