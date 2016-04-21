import React from 'react';
import { Link } from 'react-router';
import SearchForm from '../components/SearchForm';
import RecipeList from '../components/RecipeList';

const Home = () => {
  const recipes = [{
    name: 'Brazilian Mayo',
    description: 'Goes well with any kind of protein, specially BBQ',
    ingredients: ['2 eggs', 'mayo - Helmanns', '3 cooked potato'],
    difficultyLevel: 'EASY'
  }, {
    name: '5 START BBQ!',
    description: 'Meat & Salt + Garlic = BOOM!',
    ingredients: ['Meat', 'Salt', 'Garlic'],
    difficultyLevel: 'VERY EASY'
  }, {
    name: 'Butter Chicken + Curry',
    description: 'Just buy the curry sauce from a Grocery store and mix with chicken!',
    ingredients: ['prepared Curry sauce', '400g Sliced Chicken (cubes)'],
    difficultyLevel: 'EASY'
  }];

  return (
    <div className="pure-g">
      <div className="pure-u-1">
        <Link to="/create-recipe" className="pure-u-1">Add Recipe</Link>
        <h1>Recipe Book <small>{'keep grandma\'s recipes safe!'}</small></h1>
        <SearchForm />
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

Home.propTypes = {
  children: React.PropTypes.node
};

export default Home;
