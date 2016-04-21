import React from 'react';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <h3>{recipe.name}</h3>
    <p className="short-description">{recipe.description}</p>
    <p className="ingredients-count">{recipe.ingredients.length}</p>
    <p className="difficulty-level">{recipe.difficultyLevel}</p>
  </div>
);

RecipeCard.propTypes = {
  recipe: React.PropTypes.object.isRequired
};

export default RecipeCard;
