// selectors
export const getSearchString = ({ searchString }) => searchString;
export const countAllCards = ({ cards }) => cards.length;
export const countVisibleCards = ({ cards, searchString }) =>
  cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;
export const getCardsForSearch = ({ cards, columns }, searchString) => {
  const filteredCards = cards.filter(card =>
    new RegExp(searchString, 'i').test(card.title),
  );

  return filteredCards.map(card => {
    const listId = columns.filter(column => column.id === card.columnId)[0]
      .listId;

    return {
      ...card,
      listId,
    };
  });
};

// action name creator
const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_SEARCHSTRING = createActionName('CHANGE_SEARCHSTRING');

// action creators
export const createAction_changeSearchString = payload => ({
  payload,
  type: CHANGE_SEARCHSTRING,
});

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
}
