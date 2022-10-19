import { Button } from 'components/Button/Button';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { pixabayAPI } from 'services/pixabayAPI';

export const ImageGallery = ({ query, perPage = 12 }) => {
  // const [query, setQuery] = useState(props.query);
  const [pics, setPics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(props.per_page || 12);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [totalHits, setTotalHits] = useState(0);
  const toggleModalWindow = url => {
    setModalIsOpen(!modalIsOpen);
    setLargeImageURL(url);
  };
  const loadMore = e => {
    setPage(page + 1);
  };

  useEffect(() => {
    loadPictures();
  });

  const loadPictures = async () => {
    setIsLoading(true);
    try {
      const resp = await pixabayAPI.fetchImg(query, page);
      page === 1 ? setPics([...resp.hits]) : setPics([...pics, ...resp.hits]);
      setTotalHits(resp.totalHits);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && <span>{error}</span>}

      <ul className="ImageGallery">
        {pics.map(({ webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={webformatURL}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            openLargeImage={toggleModalWindow}
          />
        ))}
      </ul>
      {isLoading && <Loader />}
      {page * perPage < totalHits && !isLoading && <Button func={loadMore}></Button>}
      {modalIsOpen && <Modal largeImageURL={largeImageURL} closeModal={toggleModalWindow} />}
    </>
  );
};

ImageGallery.propTypes = {
  query: PropTypes.string,
  perPage: PropTypes.number,
};
