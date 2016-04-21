import React from 'react';
import FormStacked from './FormStacked';
import Button from './Button';

const RecipeForm = () => (
  <div className="pure-u-1">
    <h2 className="section">Create Recipe</h2>

    <FormStacked legend="Add a new recipe to Recipe Book, and share it to the community of Chefs">
      <div className="pure-u-1">
        <label htmlFor="recipe-name">Recipe Name</label>
        <input type="text" className="pure-u-1" name="recipe-name" id="recipe-name" value="" required />
      </div>

      <div className="pure-u-1">
        <label htmlFor="recipe-description">Description</label>
        <textarea id="recipe-description" className="pure-u-1" name="recipe-description" required></textarea>
      </div>

      <div className="pure-u-1">
        <label>Ingredients</label>
        <div className="pure-g">
          <div className="pure-u-1 pure-u-sm-12-24">
            <input type="text" className="pure-u-1 pure-u-sm-23-24" name="recipe-ingredient-name" id="recipe-ingredient-name" placeholder="e.g. Flour, Eggs" value="" />
          </div>
          <div className="pure-u-1-3 pure-u-sm-4-24">
            <input type="number" className="pure-u-23-24" name="recipe-ingredient-quantity" id="recipe-ingredient-quantity" placeholder="150" value="" />
          </div>
          <div className="pure-u-1-3 pure-u-sm-4-24">
            <input type="text" className="pure-u-23-24" name="recipe-ingredient-unit" id="recipe-ingredient-unit" placeholder="grams" value="" />
          </div>
          <div className="pure-u-1-3 pure-u-sm-4-24">
            <Button type="success" icon="plus" />
          </div>
        </div>
      </div>

      <div className="pure-u-1">
        <label htmlFor="recipe-description">Preparing Instructions</label>
        <textarea id="recipe-instructions" className="pure-u-1" name="recipe-instructions" rows="5" required value=""></textarea>
      </div>

      <div className="pure-u-1">
        <Button type="primary" icon="file-text">Submit Recipe</Button>
      </div>
    </FormStacked>
  </div>
);

export default RecipeForm;
