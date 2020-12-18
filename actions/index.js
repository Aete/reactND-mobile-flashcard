import { saveDeck } from '../utils/api';

export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const REMOVE_DECK = 'REMOVE_DECK';

export function addCard({ card, deckID }) {
  return {
    type: ADD_CARD,
    card,
    deckID,
  };
}

function addDeck(deckTitle) {
  return {
    type: ADD_DECK,
    deckTitle,
  };
}

export function handleAddDeck(deckTitle) {
  return (dispatch) => {
    return saveDeck({ [deckTitle]: { title: deckTitle } }).then(() => {
      dispatch(addDeck(deckTitle));
    });
  };
}

export function handleAddAnswer(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addAnswerToQuestion({ authedUser, qid, answer }));
      dispatch(addAnswerToUser({ authedUser, qid, answer }));
    });
  };
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function removeDeck(deckID) {
  return {
    type: REMOVE_DECK,
    deckID,
  };
}
