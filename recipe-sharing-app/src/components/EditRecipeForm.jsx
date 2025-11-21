import useRecipeStore from  "./recipeStore";

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe
  );
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...recipe,
      title: e.target.title.value,
      description: e.target.description.value,
    };
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  };

  return( 
    <button onClick = {() => updateRecipe({...recipe, title: recipe.title + '(updated)'})}>
     Update Recipe
    </button>


  );

  
  
};

export default EditRecipeForm;