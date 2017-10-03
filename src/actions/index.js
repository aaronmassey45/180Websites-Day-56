import axios from 'axios';

export const FETCH_NOTE = 'FETCH_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export function fetchNote() {
  const request = axios.get("https://api.myjson.com/bins/1d2r21");
  return {
    type: FETCH_NOTE,
    payload: request
  }
}

export function updateNote(values, callback) {
  const request = axios.put("https://api.myjson.com/bins/1d2r21", values)
  .then( () => callback());
  return {
    type: UPDATE_NOTE,
    payload: request
  }
}
