import '../../styles.css'

import React from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param {Boolean} isShown Is modal shown ?
 * @param {Function} trigger A trigger for turning off the modal
 * @param {String} title The modal title
 * @param message The modal message (can be DOM elements)
 * @param {Number} width The modal width
 * @returns Custom Modal
 */
export const Modal = (props) => {
  const closeModal = () => props.trigger(false)

  return (
    <>
      {props.isShown && (
        <div className="modal">
          <div className="modal-content" style={{ width: `${props.width}%` }}>
            <div className="modal-header">
              <div className="modal-title">
                <h3>{props.title}</h3>
              </div>
              <span onClick={closeModal} className="modal-close">
                &times;
              </span>
            </div>
            <div className="modal-message">
              <p>{props.message}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Modal.defaultProps = {
  title: 'Your modal title',
  message: 'Your modal message',
  width: 27,
}

Modal.propTypes = {
  isShown: PropTypes.bool.isRequired,
  trigger: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.any,
  width: PropTypes.number,
}
