// == React Import
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../style.scss';

// == News page
const News = ({ listNews }) => (

  <>
    {listNews.map((newElt) => (
      <div className="card card__container">
        <div className="card-header">
          <div className="image__article__container">
          <img className="image__article" src={newElt.img} />
          </div>
          <h2 className="article__source">{newElt.source}</h2>
          <p className="date">{newElt.pubDate}</p>
          <h3 className="article__title">{newElt.title}</h3>
          <p className="article">
            {newElt.description}
          </p>
          <p className="news-link"><a href={newElt.link}>Lire l'article</a></p>
        </div>
      </div>
    ))}
  </>
  );

News.propTypes = {
  news: PropTypes.object.isRequired,
};

// == Export
export default News;
