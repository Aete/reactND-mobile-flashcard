import AsyncStorage from '@react-native-async-storage/async-storage';

export const DECK_STORAGE_KEY = 'reactND:FlashCardsDeck';

export function _getInitialData() {
  return new Promise((res, rej) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY).then((response) => {
      if (response) {
        console.log(response);
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
        console.log(JSON.stringify(deck));
        AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deck));
      }
    })
    .catch((err) => console.log('error: ', err));
}
