import React from 'react'
import HomeComponents from '../components/Home'
import ApiFilm from '../stores/trending/index.js';


const Home = () => {
  
  return (
    <ApiFilm>
      <HomeComponents />
    </ApiFilm>
      
  
  )
}

export default Home