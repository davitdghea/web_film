import React from 'react'
import FavouritesComPoNents from '../components/Favourites'
import GetFavourites from '../stores/Favoutites/getfavourites.js'
const Favourites = () => {
  return (   
    <GetFavourites>
      <FavouritesComPoNents/>
    </GetFavourites>
  )
}

export default Favourites