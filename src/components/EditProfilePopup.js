import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpened, onClose, onUpdateUser }) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpened]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить" isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="popup__input">
        <input id="name-input" type="text" name="name" value={name} onChange={handleNameChange} className="popup__item popup__item_type_name" placeholder="Ваше имя" minLength="2" maxLength="40" required />
        <span className="name-input-error popup__input-error"></span>
        <input id="about-input" type="text" name="about" value={description} onChange={handleDescriptionChange} className="popup__item popup__item_type_about" placeholder="О себе" minLength="2" maxLength="200" required />
        <span className="about-input-error popup__input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;