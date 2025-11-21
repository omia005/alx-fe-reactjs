import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AddRecipeForm from './components/AddRecipeForm.jsx'
import RecipeList from './components/RecipeList.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path ="/recipe/:recipeId" element={<RecipeDetails />} />
        <Route path ="/" element = {< RecipeList />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/add" element={<AddRecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
      <div>
        < AddRecipeForm />
      </div>
      <div>
        < RecipeList />
      </div>
      
    </>
  )
}

export default App
