import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import MovieList from './MovieList'

function App() {
  const [movies,setMovies]=useState([{

id:1,
title:"Resident Evil",
genre:"Horror",
year:"2026",
watched:true,

},
{

id:2,
title:"Odyssey",
genre:"Action",
year:"2026",
watched:true,

},{

id:3,
title:"Doctor Strange  İn The Multiverse Of Madness",
genre:"Adventure",
year:"2026",
watched:false,

}])



  return (
    <>
      <h1>Movie</h1>
      
      <div>
      <MovieList movies={movies} /> 
      </div>
    </>
  )
}

export default App
