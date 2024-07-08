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
      const LinkYouToBe = [
        "KoxhkE_U3Ww",
        "6wL3evhiN5k",
        "XJMuhwVlca4",
        "LtNYaH61dXY",
        "LEjhY15eCx0",
        "b9mdsF3QJMk",
        "UPZRWWzmHwE",
        "dYo91Fq9tKY",
        "E-WIb4ATfT8",
        "pMAPj6WVsT4",
        "y0uS3t6nFgY",
        "aDyQxtg0V2w",
        "inIVdZSFfc0",
        "lV1OOlGwExM",
        "FxIUptcRppA",
        "oc3sPICXZLs",
        "Way9Dexny3w",
        "ss2KvK-w6w8",
        "g8zxiB5Qhsc",
        "yRUAzGQ3nS"
      ]
      const updatedMovies = res.data.results.map((result, index) => ({
        ...result,
        LinkYouToBe: LinkYouToBe[index]
      }));
      setMovies(updatedMovies);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  useEffect(() => {
    AipCall()
  }, [])
  
  console.log(movies)
  return (
    <AipContext.Provider value={{ AipCall, movies }}>
      {children}
    </AipContext.Provider>
  )
}
export default ApiFilm
