import { initialData } from './_DATA';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DECK_STORAGE_KEY = 'reactND:FlashCardsDeck';

export function _getInitialData() {
  return new Promise((res, rej) => {
    AsyncStorage.getItem(DECK_STORAGE_KEY).then((response) => {
      if (response) {
        res({ ...response });
      } else {
        res({});
      }
    });
  });
}
