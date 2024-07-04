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
          Authorization: `Bearer cb587e39dae15bd689288cb58e0d16e4`
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
