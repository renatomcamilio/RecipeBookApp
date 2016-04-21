import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import RecipeForm from './components/RecipeForm';

window.React = React;

render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/create-recipe" component={RecipeForm} />
    </Route>
  </Router>),
  document.getElementById('container')
);
