import { combineReducers } from 'redux';
import NoteReducer from './reducer_note';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  note: NoteReducer,
  form: formReducer
});

export default rootReducer;
