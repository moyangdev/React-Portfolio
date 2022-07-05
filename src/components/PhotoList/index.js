import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Run Buddy',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/run-buddy',
      applink:'https://moyangdev.github.io/run-buddy/',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Formula-1-Frenzy',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/Formula-1-Frenzy',
      applink:'https://moyangdev.github.io/Formula-1-Frenzy/',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Doggy Daycare',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/Doggy-Daycare',
      applink:'https://vast-plains-21432.herokuapp.com/',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'The Tech Blog',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/tech-blog',
      applink:'https://github.com/moyangdev/tech-blog',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Password Generator',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/password-generator',
      applink:'https://moyangdev.github.io/password-generator/',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
