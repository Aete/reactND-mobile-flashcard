import { saveDeck, saveCard, deleteDeck } from '../utils/api';

export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const REMOVE_DECK = 'REMOVE_DECK';

function addCard({ card, deckID }) {
  return {
    type: ADD_CARD,
    card,
    deckID,
  };
}

export function handleAddCard({ card, deckID }) {
  return (dispatch, getState) => {
    const { decks } = getState();
    const deck = decks[deckID];
    const newDeck = {
      [deckID]: {
        ...deck,
        questions: [...deck.questions, card],
      },
    };
    return saveCard(newDeck).then(() => {
      dispatch(addCard({ card, deckID }));
    });
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
    return saveDeck({ [deckTitle]: { title: deckTitle, questions: [] } }).then(
      () => {
        dispatch(addDeck(deckTitle));
      }
    );
  };
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

function removeDeck(deckID) {
  return {
    type: REMOVE_DECK,
    deckID,
  };
}

export function handleRemoveDeck(deckID) {
  return (dispatch) => {
    return deleteDeck(deckID).then(() => {
      dispatch(removeDeck(deckID));
    });
  };
}
