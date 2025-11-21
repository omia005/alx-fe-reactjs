import useRecipeStore from  "./recipeStore";

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe
  );
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedRecipe = {
      ...recipe,
      title: e.target.title.value,
      description: e.target.description.value,
    };
  };
  

  return( 
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        defaultValue={recipe.title}
      />
      <textarea
        name="description"
        defaultValue={recipe.description}
      />
      <button type="submit">Save Changes</button>
    </form>,
    <button onClick = {() => updateRecipe({...recipe, title: recipe.title + '(updated)'})}>
     Update Recipe
    </button>


  );

  
  
};

export default EditRecipeForm;