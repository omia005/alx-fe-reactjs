import './App.css'
import HomePage from './components/homepage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail';

function App() {


  return (
    <>
      <Router>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/recipe/:id" element={<RecipeDetail />} />
       </Routes>
      </Router>

      <div>
        <h1>Recipe Sharing Platform</h1>
        <HomePage />
        <RecipeDetail />
      </div>
    </>
  )
}

export default App
