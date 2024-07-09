import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios'

export const AipContext = createContext()

const ApiFilm = ({ children }) => {
  const [movies, setMovies] = useState([])
  const AipCall = async () => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
        params: {
          language: 'en-US',
          page: 1
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDQyMTEyNC43MDEwOTUsInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7dn_Ytdv55IaSclbifUAYz2jIRIxQZDDCN0Yxc2gPY`
        }
      })
      setMovies(res.data.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  useEffect(() => {
    AipCall()
  }, [])
  

  return (
    <AipContext.Provider value={{ AipCall, movies }}>
      {children}
    </AipContext.Provider>
  )
}
export default ApiFilm
