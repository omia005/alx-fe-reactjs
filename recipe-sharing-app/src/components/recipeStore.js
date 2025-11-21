import {create} from 'zustand'

const useRecipeStore = create(set => ({
   recipe :{
   id: 1,
   title: "Recipe Title",
   description: "Recipe Description",
   category: "Italian", // For recommendations
   ingredients: "tomato\npasta\ncheese", // For ingredient-based recommendations
   rating: 4.5 // For popularity-based recommendations
  },
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe: (updatedRecipe) => set(state => ({ 
    recipes:state.recipes.map(recipes => 
      recipes.id === updatedRecipe.id ? updatedRecipe : recipes) 
  })),
  deleteRecipe: (id) => set(state => ({ 
    recipes: state.recipes.filter(recipe => recipe.id !== id) 
  })),

  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  favorites: [],
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));



export default useRecipeStore;
