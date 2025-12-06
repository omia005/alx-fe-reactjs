import './App.css'
import HomePage from './components/homepage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm.jsx';

function App() {


  return (
    <>
      
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/recipe/:id" element={<RecipeDetail />} />
         <Route path="/add-recipe" element={<AddRecipeForm />} />
       </Routes>
      
    </>
  )
}

export default App
