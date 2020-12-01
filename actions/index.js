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

export function addDeck(deckTitle) {
  return {
    type: ADD_DECK,
    deckTitle,
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
