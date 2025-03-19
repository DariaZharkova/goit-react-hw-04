import css from './ImageCard.module.css';

export const ImageCard = ({ image, openModal }) => {
  return (
    <img
      className={css.img}
      src={image.urls.small}
      alt={image.description}
      onClick={() => {
        openModal(image);
      }}
    />
  );
};
