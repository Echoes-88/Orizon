// == React Import
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import New from './New';
import Loader from '../../Loader';
import './style.scss';

// == News page
const News = ({ getNewsDatas, news, toggleNews, indexNews, seeMoreArticles, waitingDatas }) => {

  useEffect(() => {
    getNewsDatas();
  }, []);

  const handleOnClick = () => {
    seeMoreArticles();
    getNewsDatas();
  }

  return (

    <div className="card-list">
      {toggleNews && (
        <>
          {news.map((listNews) => (
            <New listNews={listNews} />
          ))}
          <button type="button" className="see_more" onClick={handleOnClick}>Voir plus</button>
        </>
      )}
      {waitingDatas && (
      <>
        <Loader />
      </>
      )}



    </div>

  );
};

News.propTypes = {
  news: PropTypes.object.isRequired,
};

// == Export
export default News;
