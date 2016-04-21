import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => (
  <div className="pure-u-1">
    <h2 className="section">Recipes</h2>

    <div className="pure-g">
      {
        recipes.map((recipe, key) => (
          <div key={key} className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3">
            <RecipeCard recipe={recipe} />
          </div>
        ))
      }
    </div>
  </div>
);

RecipeList.propTypes = {
  recipes: React.PropTypes.array.isRequired
};

export default RecipeList;
