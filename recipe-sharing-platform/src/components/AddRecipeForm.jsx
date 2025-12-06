import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Please include at least two ingredients (comma separated)";
    if (!instructions.trim()) newErrors.instructions = "Preparation steps are required";

    setErrors(newErrors);

    // If validation passes
    if (Object.keys(newErrors).length === 0) {
      const newRecipe = {
        id: Date.now(),
        title: title.trim(),
        ingredients: ingredients.split(",").map((i) => i.trim()),
        instructions: instructions.split("\n").map((step) => step.trim()),
      };

      console.log("Recipe submitted:", newRecipe);

      // Reset form
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="ingredients">
            Ingredients (comma separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-semibold mb-1" htmlFor="instructions">
            Preparation Steps (one step per line)
          </label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={6}
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
