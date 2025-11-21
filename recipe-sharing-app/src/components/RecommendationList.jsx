import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  const getRecommendations = () => {
    if (favorites.length === 0) {
      // If no favorites, return popular or recent recipes
      return recipes
        .filter(recipe => !favorites.includes(recipe.id))
        .slice(0, 5);
    }

    const favoriteRecipes = favorites.map(id =>
      recipes.find(recipe => recipe.id === id)
    ).filter(Boolean);

    // Multiple recommendation criteria
    const recommendations = recipes.filter(recipe => {
      if (favorites.includes(recipe.id)) return false; // Skip favorites

      // Criteria 1: Same category as favorites
      const sameCategory = favoriteRecipes.some(fav => 
        fav.category === recipe.category
      );

      // Criteria 2: Similar ingredients (basic check)
      const similarIngredients = favoriteRecipes.some(fav =>
        recipe.ingredients && fav.ingredients &&
        recipe.ingredients.split('\n').some(ingredient =>
          fav.ingredients.toLowerCase().includes(ingredient.toLowerCase())
        )
      );

      // Criteria 3: High rating or popularity
      const isPopular = recipe.rating >= 4; // Assuming rating property

      return sameCategory || similarIngredients || isPopular;
    });

    return recommendations.slice(0, 5); // Return top 5 recommendations
  };

  const recommendations = getRecommendations();

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available. Start by adding some favorites!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {recipe.category && <small>Category: {recipe.category}</small>}
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;