import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpened, onClose, onAddPlace }) {

  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [isOpened]);

  return (
    <PopupWithForm name="add-element" title="Новое место" buttonText="Создать" isOpened={isOpened} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="popup__input">
        <input id="place-input" type="text" name="name" value={name} onChange={handleNameChange} className="popup__item popup__item_type_place" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="place-input-error popup__input-error"></span>
        <input id="photo-input" type="url" name="link" value={link} onChange={handleLinkChange} className="popup__item popup__item_type_photo" placeholder="Ссылка на картинку" required />
        <span className="photo-input-error popup__input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;