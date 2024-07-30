
import React, { useEffect, createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const AipContext = createContext();

const ApiFilm = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [FavoriteMovies, setFavoriteMovies] = useState([])
  const [refresh, setRefresh] = useState(false);
  const [sessionId, setSessionId] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const approved = params.get('approved');
    if (approved === 'true'){
      const fetchSessionId = async () => {
        const requestToken = localStorage.getItem('request_token');
        if (requestToken) {
          try {
            const response = await axios.post(`https://api.themoviedb.org/3/authentication/session/new`, {
              request_token: requestToken
            }, {
              params: {
                api_key: process.env.REACT_APP_API_TOKEN
              }
            });
            setSessionId(response.data.session_id);
            localStorage.setItem('sessionId', response.data.session_id)
            console.log('sessionId', sessionId)
          } catch (error) {
            console.error('Error creating session ID:', error);
          }
        }
      };
      fetchSessionId();
    
    }
  }, []);
  

   

  // Hàm lấy danh sách phim đang thịnh hành
  const fetchTrendingMovies = async () => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_TOKEN}`, {
        params: {
          language: 'en-US',
          page: 1
        },
       
      });
      setMovies(res.data.results);
    } catch (error) {
      console.error('Lỗi khi lấy phim thịnh hành: ', error);
    }
  };

  // Hàm lấy chi tiết phim
  const fetchMovieDetails = async (movieId) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_TOKEN}`, {
        params: {
          language: 'en-US'
        },
       
      });
      return res.data; // Trả về dữ liệu chi tiết phim
    } catch (error) {
      console.error(`Lỗi khi lấy chi tiết phim với ID ${movieId}: `, error);
      throw error; // Ném lỗi để xử lý bên ngoài
    }
  };
 
  // Hàm lấy chi tiết phim đã yêu thích (heart details)
  const fetchFavoriteMovies = useCallback(async () => {
    const sessionId = localStorage.getItem('sessionId')
    if (sessionId) {
      
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/account/21350099/favorite/movies`, {
          params: {
            api_key: process.env.REACT_APP_API_TOKEN,
            session_id: sessionId
          }
        });
        setFavoriteMovies(response.data.results);
        console.log('Favorite Movies:', response.data.results);
      } catch (error) {
        console.error('Error fetching favorite movies:', error);
      }
    }
  }, []);
  useEffect(() => {
      fetchFavoriteMovies();
  }, [fetchFavoriteMovies, refresh]);
  
  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    const fetchMovieDetailsForAll = async () => {
      try {
        const promises = movies.map(movie => fetchMovieDetails(movie.id));
        const movieDetailsData = await Promise.all(promises);
        setMovieDetails(movieDetailsData);
      } catch (error) {
        console.error('Lỗi khi lấy chi tiết phim: ', error);
      }
    };

    if (movies.length > 0) {
      fetchMovieDetailsForAll();
    }
  }, [movies]);
  const mergeArraysWithLove = (array1, array2) => {
    return array1.map(item => {
      const match = array2.find(element => element.id === item.id);
      return {
        ...item,
        love: match ? true : false
      };
    });
  };

 
  const MergedArray = mergeArraysWithLove(movieDetails, FavoriteMovies);

  
  // Hàm callback để refresh dữ liệu
  const refreshApiCall = useCallback(() => {
    setRefresh(prev => !prev);
  }, []);
 

  return (
    <AipContext.Provider value={{ MergedArray, FavoriteMovies, refreshApiCall, fetchFavoriteMovies }}>
      {children}
    </AipContext.Provider>
  );
};

export default ApiFilm;

