import { merge, assign as assignPolyfill } from '@ember/polyfills';
const assign = assignPolyfill || Object.assign || _assign;

function _assign(origin, ...sources) {
  return sources.reduce((acc, source) => merge(acc, source), merge({}, origin));
}

export default function pureAssign() {
  return assign({}, ...arguments);
}
