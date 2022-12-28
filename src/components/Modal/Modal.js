import '../../styles.css';

import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Boolean} isShown Is modal shown ?
 * @param {Function} trigger A trigger for turning off the modal
 * @param {String} title The modal title
 * @param message The modal message (can be DOM elements)
 * @returns Custom Modal
 */
export const Modal = ({ isShown, trigger, title, message }) => {
  const closeModal = () => trigger(false);

  return (
    <>
      {isShown && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">
                <h3>{title}</h3>
              </div>
              <span onClick={closeModal} className="modal-close">
                &times;
              </span>
            </div>
            <div className="modal-message">
              <span>{message}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  isShown: PropTypes.bool.isRequired,
  trigger: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.any.isRequired,
};
