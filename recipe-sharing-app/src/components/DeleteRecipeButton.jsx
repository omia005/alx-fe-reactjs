import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import React from 'react';

const DeleteRecipeButton = ({ recipeid }) =>{
  const deleteRecipe = useRecipeStore(state =>
    state.deleteRecipe
  );
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeid);
    navigate('/recipes'); // Navigate back to the recipe list after deletion
  };
  

  return(
    <button onClick = {() => deleteRecipe(recipeid)}>Delete Recipe</button>
  );

}

export default DeleteRecipeButton;