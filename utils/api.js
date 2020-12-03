import { initialData } from './_DATA';

export function _getInitialData() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...initialData }), 1000);
  });
}
