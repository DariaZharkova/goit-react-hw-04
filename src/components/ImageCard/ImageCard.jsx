import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';
import css from './ImageCard.module.css';

export const ImageCard = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <>
      <img
        className={css.img}
        src={image.urls.small}
        alt={image.description}
        onClick={openModal}
      />
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} image={image} />
    </>
  );
};
