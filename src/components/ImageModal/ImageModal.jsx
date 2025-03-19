import Modal from 'react-modal';
import css from './ImageModal.module.css';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ onClose, image }) => {
  const isOpen = Boolean(image);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      {image && (
        <>
          <img
            className={css.img}
            onClick={onClose}
            src={image.urls.regular}
            alt={image.description}
          />
          <p className={css.descr}>{image.description}</p>
        </>
      )}
    </Modal>
  );
};
