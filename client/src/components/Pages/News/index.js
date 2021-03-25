// == React Import
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import New from './New';
import Loader from '../../Tools/Loader';
import './style.scss';

// == News page
const News = ({ getNewsDatas, news, toggleNews, indexNews, seeMoreArticles }) => {

  useEffect(() => {
    getNewsDatas();
  }, []);

  const handleOnClick = () => {
    seeMoreArticles();
    getNewsDatas();
  }

  return (
    <>
      {toggleNews && (
        <>
        <div className="card-list">
          {news.map((listNews) => (
            <New listNews={listNews} key={listNews} />
          ))}
        </div>
        <div className="news_see-more">
          <button type="button" className="see_more" 
          onClick={handleOnClick}>Voir plus</button>
        </div>
      </>
      )}

      {!toggleNews && (
        <>
          <Loader className="news_loader"/>
        </>
      )}
    </>
  );
};

News.propTypes = {
  news: PropTypes.array.isRequired,
};

// == Export
export default News;
