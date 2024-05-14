import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile'
import MovieList from './components/MoviesList'
import MovieDetails from './components/MovieDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-app'>
    <UserProfile/>
    {/* <MovieList/> */}
    <MovieDetails/>
    </div>
  )
}

export default App
