import { assign, merge } from '@ember/polyfills';
import { get, computed } from '@ember/object';
import { typeOf } from '@ember/utils';
const { keys } = Object;
const assign = assign || merge;

export default function objectToArray(objKey, flattenObjects) {
  return computed(objKey, function() {
    let obj = get(this, objKey);

    return keys(obj).map((key) => {
      let value = obj[key];

      if (flattenObjects && typeOf(value) === 'object') {
        return assign({ key }, value);
      }

      return { key, value };
    });
  }).readOnly();
}
