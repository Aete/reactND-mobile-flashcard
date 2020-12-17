import { ADD_CARD, ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from '../actions';

export default function deck(state = {}, action) {
  switch (action.type) {
    case ADD_CARD:
      const deckID = action.deckID;
      const { question, answer } = action.card;
      return {
        ...state,
        decks: {
          ...state.decks,
          [deckID]: {
            ...state.decks[deckID],
            questions: [...state.decks[deckID].questions, { question, answer }],
          },
        },
      };
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
      return {
        ...state,
        decks: Object.keys(state.decks)
          .filter((deck) => deck !== action.deckID)
          .reduce((obj, key) => {
            obj[key] = state.decks[key];
            return obj;
          }, {}),
      };
    default:
      return state;
  }
}
