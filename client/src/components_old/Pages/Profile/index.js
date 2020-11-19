// == React Import
import React from 'react';
// import classNames from 'classnames';
import Field from '../../../containers/Field';

// == Import
import './styles.scss';

// == Profile page
const Profile = ({
  username, lastname, firstname, email, password, quiz, updateProfile,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    updateProfile();
  };

    const avatarUrl = 'http://localhost:5000/';
    const uploadUrl = 'http://localhost:5000/api/upload/';

    const linkConverter = (url) => {
    let urlConverted;
    if (url === avatarUrl) {
      urlConverted = avatarUrl + username;
    } else {
      urlConverted = url + username;
    }
    return urlConverted;
  };

  return (
    <div className="profilepage">
      <div className="profilepage__usercard">
        <div className="profilepage__infos">
          <img className="profile_avatar" alt={username} src={linkConverter(avatarUrl)} />
          <form method="POST" action={linkConverter(uploadUrl)} encType="multipart/form-data">
            <label className="fieldLabel"> Profile picture
              <input
                type="file"
                name={username}
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

          <form method="POST" onSubmit={handleOnSubmit}>
            <label className="fieldLabel"> Username
              <Field
                  type="text"
                  name="username"
                  placeholder={username}
                />
            </label>
            <label className="fieldLabel"> Last Name
              <Field
                  type="text"
                  name="lastname"
                  placeholder={lastname}
                />
            </label>
            <label className="fieldLabel"> First Name
              <Field
                  type="text"
                  name="firstname"
                  placeholder={firstname}
                />
            </label>
            <label className="fieldLabel"> E-mail
              <Field
                  type="email"
                  name="email"
                  placeholder={email}
                />
            </label>
            <label className="fieldLabel"> Password
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
        Quizz results
        <div className="profilepage__quizlevel">
          quiz level
        </div>
      </div>

    </div>
  );
};

export default Profile;

{ /* <input
      name={name} value={value}
      placeholder={capitalize(placeholder)}
      type={typeChecker(name)}
      onChange={({target}) => getProfileValues(name, target.value)}

      />  */ }
{ /* <form onSubmit={(event) => {
          event.preventDefault();
          updateProfile();
        }}> */ }
