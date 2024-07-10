import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';

export const AipContext = createContext();

const ApiFilm = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);

  const fetchTrendingMovies = async () => {
    try {
      const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
        params: {
          language: 'en-US',
          page: 1
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDQyMTEyNC43MDEwOTUsInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7dn_Ytdv55IaSclbifUAYz2jIRIxQZDDCN0Yxc2gPY`
        }
      });
      setMovies(res.data.results);
    } catch (error) {
      console.error('Error fetching trending movies: ', error);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          language: 'en-US'
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDQyMTEyNC43MDEwOTUsInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7dn_Ytdv55IaSclbifUAYz2jIRIxQZDDCN0Yxc2gPY`
        }
      });
      const movieDetail = res.data;
      setMovieDetails(prevDetails => [...prevDetails, movieDetail]);
    } catch (error) {
      console.error(`Error fetching details for movie with ID ${movieId}: `, error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    movies.forEach(movie => {
      fetchMovieDetails(movie.id);
    });
  }, [movies]);
  console.log(movieDetails)
  return (
    <AipContext.Provider value={{ movieDetails, fetchTrendingMovies }}>
      {children}
    </AipContext.Provider>
  );
};

export default ApiFilm;
