import _id from './id';
export const set = (id, value) => {
  if(typeof value === 'undefined' || !id || !value) {
    return false;
  }
  if(typeof value === 'object') {
    localStorage.setItem(_id(id), JSON.stringify(value));
    return true;
  }
  localStorage.setItem(_id(id), value);
  return true;
}
