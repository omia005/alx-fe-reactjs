 import  useRecipeStore  from './recipeStore';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );
    const updateRecipe = useRecipeStore(state => 
      state.updateRecipe
    );
    const deleteRecipe = useRecipeStore(state =>
      state.deleteRecipe
    );

    if (!recipe) {
      return <div>Recipe not found</div>;
    }

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <button onClick = {() => deleteRecipe(recipe.id)}>Delete Recipe</button>
        <button onClick = {() => updateRecipe({...recipe, title: recipe.title + '(upated)'})}
        >Update Recipe</button>
      </div>
    );
  };

  export default RecipeDetails;