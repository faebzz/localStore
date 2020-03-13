import { get } from './get';
import { set } from './set';

export default {
  set: (id, value) => set(id, value),
  get: (id) => get(id)
}
