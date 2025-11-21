import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

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
    <button onClick={handleDelete}>Delete Recipe</button>
  );

}

export default DeleteRecipeButton;