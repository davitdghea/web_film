import React, { useEffect, createContext, useState } from 'react';
import axios from 'axios';

export const AipContext = createContext();

const ApiFilm = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [heartDetails,setHeartDetails] = useState([])
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
      console.log(movies)
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
      console.log(movieDetails)
    } catch (error) {
      console.error(`Error fetching details for movie with ID ${movieId}: `, error);
    }
  };

  
  

  const TrenDingMovies = movieDetails.filter((movie,index,self)=>{
    return index === self.findIndex((t) => t.id === movie.id)
  })
  const HeartMovies = async (movieId) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/account_states`, {
        params: {
          language: 'en-US'
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDQyMTEyNC43MDEwOTUsInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7dn_Ytdv55IaSclbifUAYz2jIRIxQZDDCN0Yxc2gPY`
        }
      });
      const movieDetail = res.data;
      setHeartDetails(prevDetails => [...prevDetails, movieDetail]);
    } catch (error) {
      console.error(`Error fetching details for movie with ID ${movieId}: `, error);
    }
  };
  useEffect(() => {
    ApiFilm();
  }, []);

  useEffect(() => {
    movies.forEach(movie => {
      fetchMovieDetails(movie.id);
    });
  }, [movies]);
  useEffect(() => {
    TrenDingMovies.forEach(movie => {
      HeartMovies(movie.id);
    });
  }, []);
  console.log(heartDetails)
  const mergeArraysById = (TrenDingMovies, heartDetails) => {
    
    heartDetails.forEach(item2 => {
   
      const item1 = TrenDingMovies.find(item1 => item1.id === item2.id);
      if (item1) {
      
        Object.assign(item1, item2);
      }
    });

    return TrenDingMovies;
  };
  const mergedArray = mergeArraysById(TrenDingMovies, heartDetails);
  console.log(mergedArray)

  return (
    <AipContext.Provider value={{ mergedArray, fetchTrendingMovies }}>
      {children}
    </AipContext.Provider>
  );
};

export default ApiFilm;


