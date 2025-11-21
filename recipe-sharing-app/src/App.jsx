import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AddRecipeForm} from './components/AddRecipeForm.jsx'
import {RecipeList} from './components/RecipeList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

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
