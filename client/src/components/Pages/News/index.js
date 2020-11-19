// == React Import
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import New from './New';
import Loader from '../../Tools/Loader';
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
    <>
    <div className="card-list">
      {toggleNews && (
        <>
          {news.map((listNews) => (
            <New listNews={listNews} />
          ))}
        </>
      )}

    </div>
    {waitingDatas && (
      <>
        <Loader className="news_loader"/>
      </>
      )}
      {toggleNews && (
        <div className="news_see-more">
      <button type="button" className="see_more" onClick={handleOnClick}>Voir plus</button>
    </div>

      )}

    </>
  );
};

News.propTypes = {
  news: PropTypes.object.isRequired,
};

// == Export
export default News;
