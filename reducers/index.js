import { ADD_CARD, ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from '../actions';

export default function deck(state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      return state;
    case ADD_DECK:
      return state;
    case RECEIVE_DECKS:
      return { ...state, decks: action.decks };
    case REMOVE_DECK:
      return state;
    default:
      return state;
  }
}
