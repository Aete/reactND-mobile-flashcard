import { ADD_CARD, ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from '../actions';

export default function deck(state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      return state;
    case ADD_DECK:
      const title = action.deckTitle;
      return {
        ...state,
        decks: {
          ...state.decks,
          [title]: {
            title: title,
            questions: [],
          },
        },
      };
    case RECEIVE_DECKS:
      return { ...state, decks: action.decks };
    case REMOVE_DECK:
      console.log(state);
      delete state.decks[action.deckID];
      return { ...state };
    default:
      return state;
  }
}
