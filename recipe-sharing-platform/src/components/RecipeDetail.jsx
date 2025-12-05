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

    if (!recipe) {
        return <div>Loading...</div>;
    }
    return (
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow">
            <img src={recipe.image}
              alt={recipe.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.summary}</p>
        </div>
    );
}
export default RecipeDetail;