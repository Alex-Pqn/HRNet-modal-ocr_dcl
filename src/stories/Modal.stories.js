import './styles.css';

import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '../components/Modal';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const displayModal = () => setIsModalShown(true);

  return (
    <div className="stories-app">
      <h1>This is a Stories App</h1>
      <p>This is a description</p>
      <button onClick={displayModal}>Display modal</button>
      <Modal
        isShown={isModalShown}
        trigger={setIsModalShown}
        title={"Retour à l'accueil"}
        message={
          <div>
            En cliquant <a href="/">ici</a> je pourrais retourner à l'accueil.
          </div>
        }
      />
      <p>And another description below</p>
    </div>
  );
});
