import _id from './id';
export const get = (id) => {
  try {
      return JSON.parse(localStorage.getItem(_id(id)));
  } catch (e) {
      return localStorage.getItem(_id(id));
  }

}
