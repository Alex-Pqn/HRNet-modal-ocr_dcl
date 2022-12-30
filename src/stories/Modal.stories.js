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
        width={27}
        title="Your modal title"
        message="Your modal message"
      />
      <p>And another description below</p>
    </div>
  );
});
