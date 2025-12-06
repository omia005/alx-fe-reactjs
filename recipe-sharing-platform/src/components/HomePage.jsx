import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition block"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
          <p className="text-gray-600 text-sm">{recipe.summary}</p>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;


   
  
