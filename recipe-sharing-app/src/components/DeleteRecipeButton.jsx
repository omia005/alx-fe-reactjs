import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeid }) =>{
  const deleteRecipe = useRecipeStore(state =>
    state.deleteRecipe
  );
  return(
    <button onClick = {() => deleteRecipe(recipeid)}>Delete Recipe</button>
  );
  
}

export default DeleteRecipeButton;