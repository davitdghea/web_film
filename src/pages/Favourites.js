import React from 'react'
import FavouritesComPoNents from '../components/Favourites'
import ApiFilm from '../stores/trending'

const Favourites = () => {
  return (   
    <ApiFilm>
      <FavouritesComPoNents/>
    </ApiFilm>
  )
}

export default Favourites