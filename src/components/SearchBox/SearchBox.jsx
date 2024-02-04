import toast from 'react-hot-toast';
import { GoSearch } from 'react-icons/go';

export const SearchBox = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === '') {
      toast.error('Please write something for search!');
      return;
    }
    onSearch(evt.target.elements.query.value);
    evt.target.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <GoSearch />
        </button>
      </form>
    </header>
  );
};
