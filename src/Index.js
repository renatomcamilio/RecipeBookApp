import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './pages/Home';
import RecipeForm from './components/RecipeForm';

window.React = React;

render(
  (<Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/create-recipe" component={RecipeForm} />
    </Route>
  </Router>),
  document.getElementById('container')
);
