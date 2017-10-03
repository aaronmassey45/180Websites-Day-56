import { FETCH_NOTE } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_NOTE:
      return action.payload.data;
    default:
      return state;
  }
}
