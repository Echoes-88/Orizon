import { connect } from 'react-redux';
import News from '../components/Pages/News';
import { getNewsDatas, setNewIndex } from '../actions/news';

const mapStateToProps = (state) => ({
  toggleNews: state.news.toggleNews,
  waitingDatas: state.news.waitingDatas,
  news: state.news.newsDatas,
  loading: state.news.loading,
  indexNews: state.news.indexNews,
});

const mapDispatchToProps = (dispatch) => ({
  getNewsDatas: () => {
    dispatch(getNewsDatas());
  },

  seeMoreArticles: () => {
    dispatch(setNewIndex());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
