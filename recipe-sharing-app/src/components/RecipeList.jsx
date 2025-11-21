// RecipeList component
  import  useRecipeStore  from './recipeStore';
  import React from 'react';
  import SearchBar from './SearchBar';
  import {useNavigate, Link } from 'react-router-dom'

  export const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);

    const filteredRecipes = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const recipesToShow = searchTerm ? filteredRecipes : recipes;

    const navigate = useNavigate();

    const handleRecipeClick = (id) => {
      navigate(`/recipe/${id}`);
    };

    return (
      <div>
        <h1>Recipe List</h1>
        <SearchBar />
        <ul>
          {recipesToShow.map(recipe => (
            <li key={recipe.id} onClick={() => handleRecipeClick(recipe.id)} style={{cursor: 'pointer'}}>
              {recipe.title}
            </li>
          ))}
        </ul>
      </div>
    );
    
  };

  export default RecipeList;