import css from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  return (
    <p className={css.message}>
      Oops, something went wrong, please try reloading the page 😭
    </p>
  );
};
