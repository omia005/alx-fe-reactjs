// RecipeList component
  import  useRecipeStore  from './recipeStore';
  import React from 'react';
  import SearchBar from './SearchBar';

  export const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            < SearchBar />
          </div>
        ))}
      </div>
    );
  };

  export default RecipeList;