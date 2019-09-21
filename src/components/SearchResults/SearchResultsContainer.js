import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import {
  getCardsForSearch,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = dispatch => ({
  changeSearchString: searchString =>
    dispatch(createAction_changeSearchString(searchString)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResults);
