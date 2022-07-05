import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
  const { name, description, category, index, gitlink, applink } = currentPhoto;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`).default}
          alt="current category"
        />
        <p>{description}</p>
        <button type="button" onClick={onClose}>
          Close this modal
        </button>
        <button type="button">
          <a
            href={gitlink}
            target="_blank"
            rel="noreferrer"
          >Open GitHub Repo
          </a>
        </button>
        <button type="button">
          <a
            href={applink}
            target="_blank"
            rel="noreferrer"
          >Open Deployed App
          </a>
        </button>
      </div>
    </div>
  );
};

export default Modal;
