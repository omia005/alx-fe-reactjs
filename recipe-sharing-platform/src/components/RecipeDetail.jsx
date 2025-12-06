import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import recipes from '../data.json';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = recipes.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
    }, [id]);

    
    return (
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow hover:shadow-lg">
            <img src={recipe.image}
              alt={recipe.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.summary}</p>
            
          {/* ⭐ INGREDIENTS SECTION */}
            {recipe.ingredients && (
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                        {recipe.ingredients.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* ⭐ INSTRUCTIONS SECTION */}
            {recipe.instructions && (
                <div>
                    <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-800">
                        {recipe.instructions.map((step, idx) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );

    
}
export default RecipeDetail;