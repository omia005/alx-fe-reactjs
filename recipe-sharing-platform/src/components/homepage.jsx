import {useState} from 'react';
import {useEffect} from 'react';


const HomePage = () =>{
   const [recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch('src/data.json')
        .then((response) => response.json())
        .then((data) => setRecipe(data))
    }, []);
    
   
  