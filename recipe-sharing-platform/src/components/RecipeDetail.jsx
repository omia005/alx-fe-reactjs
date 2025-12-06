import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch("/data.json")
            .then((response) => response.json())
            .then((data) => {
                const found = data.find((r) => r.id === parseInt(id));
                setRecipe(found);
            });
    }, [id]);

   if (!recipe) {
  return <div className="text-center mt-10 text-lg">Recipe not found or loading...</div>;
}


    return (
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow hover:shadow-lg">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-60 object-cover rounded-xl mb-4"
            />

            <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
            <p className="text-gray-700 mb-6">{recipe.summary}</p>

            {recipe.ingredients && (
                <div>
                    <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                    <ul className="list-disc pl-0 ml-0">
                        {recipe.ingredients.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

            {recipe.instructions && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Instructions</h3>
                    <ol className="list-decimal pl-0 space-y-2">
                        {recipe.instructions.map((step, id) => (
                            <li key={id}>{step}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default RecipeDetail;
