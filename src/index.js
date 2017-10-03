import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Promise from 'redux-promise';
import './App.css';

import reducers from './reducers';
import Navbar from './components/navbar';
import NotePage from './components/note_page';
import NoteEdit from './components/note_edit';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Navbar brand="Open Note" />
        <Switch>
          <Route path="/edit" component={NoteEdit} />
          <Route path="/" component={NotePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
