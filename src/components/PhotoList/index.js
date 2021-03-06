import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Formula-1-Frenzy',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/Formula-1-Frenzy',
      applink:'https://moyangdev.github.io/Formula-1-Frenzy/',
      description:
        'First Group Project'
    },
    {
      name: 'Doggy Daycare',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/Doggy-Daycare',
      applink:'https://vast-plains-21432.herokuapp.com/',
      description:
        'Second Group Project'
    },
    {
      name: 'Freedom Fit',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/Freedom-Fit',
      applink:'https://peaceful-refuge-94626.herokuapp.com/',
      description:
        'Third Group Project'
    },
    {
      name: 'The Tech Blog',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/tech-blog',
      applink:'https://github.com/moyangdev/tech-blog',
      description:
        'Tech Blog App'
    },
    {
      name: 'Password Generator',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/password-generator',
      applink:'https://moyangdev.github.io/password-generator/',
      description:
        'An app that generates random password'
    },
    {
      name: 'Run Buddy',
      category: 'projects',
      gitlink: 'https://github.com/moyangdev/run-buddy',
      applink:'https://moyangdev.github.io/run-buddy/',
      description:
        'Run Buddy App'
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
