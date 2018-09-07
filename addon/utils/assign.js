import { merge, assign } from '@ember/polyfills';
const assign = assign || Object.assign || _assign;

function _assign(origin, ...sources) {
  return sources.reduce((acc, source) => merge(acc, source), merge({}, origin));
}

export default function pureAssign() {
  return assign({}, ...arguments);
}
