import { ImageCard } from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <ImageCard image={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
};
