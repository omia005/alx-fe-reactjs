import {useState} from 'react';
import {useEffect} from 'react';


const HomePage = () =>{
   const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch('src/data.json')
        .then((response) => response.json())
        .then((data) => setRecipe(data))
    }, []);

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
         {recipe.map((recipe) => (
         <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition"
         >
         <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover rounded-xl mb-4"
         />
         <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
         <p className="text-gray-600 text-sm">{recipe.summary}</p>
        </div>
      ))}
        </div>
);
}
export default Homepage;

   
  
