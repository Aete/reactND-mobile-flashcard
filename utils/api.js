import AsyncStorage from '@react-native-async-storage/async-storage';

export const DECK_STORAGE_KEY = 'reactND:FlashCardsDeck';

export function _getInitialData() {
  return new Promise((res, rej) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY).then((response) => {
      if (response) {
        res({ ...JSON.parse(response) });
      } else {
        res({});
      }
    });
  });
}

export function saveDeck(deck) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((response) => {
      if (response) {
        AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck));
      } else {
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deck));
      }
    })
    .catch((err) => console.log('error: ', err));
}

export function saveCard(deck) {
  console.log(deck);
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(deck));
}

export function deleteDeck(deckID) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((response) => {
      const decks = JSON.parse(response);
      delete decks[deckID];
      console.log(decks);
      if (decks[deckID]) {
        AsyncStorage.setItem(DECK_STORAGE_KEY, decks[deckID]);
      } else {
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify({}));
      }
    })
    .catch((err) => console.log('error: ', err));
}
