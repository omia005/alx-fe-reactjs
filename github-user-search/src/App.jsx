import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search.jsx'

function App() {
  

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<h1>GitHub User Search App</h1>}/>
        </Routes>
      </div>
      <div>
        <Search />
      </div>
    </>
  )
}

export default App
