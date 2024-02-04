import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { fetchImages } from '../../api';
import { SearchBox } from '../SearchBox/SearchBox';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const searchImages = newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
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
      <SearchBox onSearch={searchImages} />
      {images.length > 0 && <ImageGallery items={images} />}
      {error && <b>Oops, there was an error, please try reloading 😭</b>}
      {loading && <b>Loading articles, please wait...</b>}
      {images.length > 0 && !loading && showBtn && (
        <LoadMoreBtn onLoadMoreClick={handleLoadMore} />
      )}
      <Toaster position="top-right" />
    </>
  );
};
