import { useState } from 'react';
import { ImageModal } from '../ImageModal/ImageModal';

export const ImageCard = ({ image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div>
      <img src={image.urls.small} alt={image.description} onClick={openModal} />
      <ImageModal isOpen={modalIsOpen} onClose={closeModal} image={image} />
    </div>
  );
};
