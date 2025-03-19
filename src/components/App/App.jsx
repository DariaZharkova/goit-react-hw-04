import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages } from '../../api';
import { SearchBox } from '../SearchBox/SearchBox';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Loader } from '../Loader/Loader';
import css from './App.module.css';
import { ImageModal } from '../ImageModal/ImageModal';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const searchImages = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = image => {
    console.log('Opening modal with image:', image);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImages(query.split('/')[1], page);
        setImages(prevImages => [...prevImages, ...fetchedData.results]);
        setShowBtn(fetchedData.total_pages !== page);
        if (fetchedData.total_pages === 0) {
          toast.error(
            'Nothing was found for your search, please try to write another word!'
          );
          return;
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <header className={css.header}>
        <SearchBox onSearch={searchImages} />
      </header>

      <main className={css.main}>
        {images.length > 0 && (
          <ImageGallery items={images} openModal={openModal} />
        )}
        {error && <ErrorMessage />}
        {loading && <Loader />}
        {images.length > 0 && !loading && showBtn && (
          <LoadMoreBtn onLoadMoreClick={handleLoadMore} />
        )}
        <Toaster position="top-right" />
        <ImageModal onClose={closeModal} image={selectedImage} />
      </main>
    </>
  );
};
