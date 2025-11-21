 import  useRecipeStore  from './recipeStore';
 import EditRecipeForm from './EditRecipeForm';
 import DeleteRecipeButton from './DeleteRecipeButton';
 import { useParams, useNavigate, Link } from 'react-router-dom'
 import FavouriteList from './FavouriteList';
 import RecommendationList from './RecommendationList';


  const RecipeDetails = () => {
    const {id} = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === parseInt(id)
    ));

    if (!recipe) {
     return (
       <div>
         <h2>Recipe Not Found</h2>
         <Link to="/recipes">Back to Recipes</Link>
       </div>
     );
    }
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm recipeId={recipe.id} />
        <DeleteRecipeButton recipeId={recipe.id} />
        <FavouriteList />
        <RecommendationList recipe={recipe} />
      </div>
    );
  };

  export default RecipeDetails;