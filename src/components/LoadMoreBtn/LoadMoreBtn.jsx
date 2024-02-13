import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onLoadMoreClick }) => {
  return (
    <button className={css.btn} onClick={onLoadMoreClick}>
      Load more
    </button>
  );
};
