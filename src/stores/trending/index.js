
// import React, { useEffect, createContext, useState, useCallback } from 'react';
// import axios from 'axios';

// export const AipContext = createContext();

// const ApiFilm = ({ children }) => {
//   const [movies, setMovies] = useState([]);
//   const [movieDetails, setMovieDetails] = useState([]);
//   const [heartDetails, setHeartDetails] = useState([]);
//   const [refresh, setRefresh] = useState(false);

//   // Hàm lấy danh sách phim đang thịnh hành
//   const fetchTrendingMovies = async () => {
//     try {
//       const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day', {
//         params: {
//           language: 'en-US',
//           page: 1
//         },
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDQyMTEyNC43MDEwOTUsInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7dn_Ytdv55IaSclbifUAYz2jIRIxQZDDCN0Yxc2gPY`
//         }
//       });
//       setMovies(res.data.results);
//     } catch (error) {
//       console.error('Lỗi khi lấy phim thịnh hành: ', error);
//     }
//   };

//   // Hàm lấy chi tiết phim
//   const fetchMovieDetails = async (movieId) => {
//     try {
//       const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
//         params: {
//           language: 'en-US'
//         },
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDQyMTEyNC43MDEwOTUsInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7dn_Ytdv55IaSclbifUAYz2jIRIxQZDDCN0Yxc2gPY`
//         }
//       });
//       const movieDetail = res.data;
//       setMovieDetails(prevDetails => [...prevDetails, movieDetail]);
//     } catch (error) {
//       console.error(`Lỗi khi lấy chi tiết phim với ID ${movieId}: `, error);
//     }
//   };

//   // Hàm lấy chi tiết phim đã yêu thích (heart details)
//   const fetchHeartDetails = async (movieId) => {
//     try {
//       const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/account_states`, {
//         params: {
//           language: 'en-US'
//         },
//         headers: {
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDQyMTEyNC43MDEwOTUsInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7dn_Ytdv55IaSclbifUAYz2jIRIxQZDDCN0Yxc2gPY`
//         }
//       });
//       const heartDetail = res.data;
//       setHeartDetails(prevDetails => [...prevDetails, heartDetail]);
//     } catch (error) {
//       console.error(`Lỗi khi lấy chi tiết phim yêu thích với ID ${movieId}: `, error);
//     }
//   };

//   useEffect(() => {
//     fetchTrendingMovies();
//   }, []);

//   useEffect(() => {
//     movies.forEach(movie => {
//       fetchMovieDetails(movie.id);
//     });
//   }, [movies]);

//   useEffect(() => {
//     movieDetails.forEach(movie => {
//       fetchHeartDetails(movie.id);
//     });
//   }, [refresh]);

//   // Hàm gộp hai mảng dựa trên id
//   const mergeArraysById = (array1, array2) => {
//     const MergedArray = array1.map(item => {
//       const match = array2.find(element => element.id === item.id);
//       return match ? { ...item, ...match } : item;
//     });
//     return MergedArray;
//   };

//   const MergedArray = mergeArraysById(movieDetails, heartDetails);
//   const removeDuplicates = (arr) => {
//     const seen = new Set();
//     return arr.filter(item => {
//       const duplicate = seen.has(item.id);
//       seen.add(item.id);
//       return !duplicate;
//     });
//   };

//   const mergedArray = removeDuplicates(MergedArray);
//   console.log(mergedArray);

//   const refreshApiCall = useCallback(() => {
//     setRefresh(prev => !prev);
//   }, []);
//   return (
//     <AipContext.Provider value={{ mergedArray, refreshApiCall }}>
//       {children}
//     </AipContext.Provider>
//   );
// };

// export default ApiFilm;


import React, { useEffect, createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const AipContext = createContext();

const ApiFilm = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);
  const [heartDetails, setHeartDetails] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Hàm lấy danh sách phim đang thịnh hành
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
      const data = res.data.results
      setMovies(data);
      console.log(data)
      
    } catch (error) {
      console.error('Lỗi khi lấy phim thịnh hành: ', error);
    }
    
  };

  // Hàm lấy chi tiết phim
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
      console.error(`Lỗi khi lấy chi tiết phim với ID ${movieId}: `, error);
    }
  };

  // Hàm lấy chi tiết phim đã yêu thích (heart details)
  const fetchHeartDetails = async (movieId) => {
    try {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/account_states`, {
        params: {
          language: 'en-US'
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDQyMTEyNC43MDEwOTUsInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i7dn_Ytdv55IaSclbifUAYz2jIRIxQZDDCN0Yxc2gPY`
        }
      });
      const heartDetail = res.data;
     
      setHeartDetails(prevDetails => [...prevDetails, heartDetail]);
     
    } catch (error) {
      console.error(`Lỗi khi lấy chi tiết phim yêu thích với ID ${movieId}: `, error);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, [refresh]);

  useEffect(() => {
    movies.forEach(movie => {
      fetchMovieDetails(movie.id);
    });
  }, [movies]);

  useEffect(() => {
    movieDetails.forEach(movie => {
      fetchHeartDetails(movie.id);
    });
  }, [movieDetails]);

  // Hàm gộp hai mảng dựa trên id
  const mergeArraysById = (array1, array2) => {
    const MergedArray = array1.map(item => {
      const match = array2.find(element => element.id === item.id);
      return match ? { ...item, ...match } : item;
    });
    return MergedArray;
  };
 
  const removeMoveDetails = (arr) => {
    const seen = new Set();
    return arr.filter(item => {
      const duplicate = seen.has(item.id);
      seen.add(item.id);
      return !duplicate;
    });
  };

  const MovieDetails = removeMoveDetails(movieDetails);
  //
  const removeDupDetails = (arr) => {
    const seen = new Set();
    return arr.filter(item => {
      const duplicate = seen.has(item.id);
      seen.add(item.id);
      return !duplicate;
    });
  };

  const HeartDetails = removeDupDetails(heartDetails);
  const MergedArray = mergeArraysById(MovieDetails, HeartDetails);
  const removeDuplicates = (arr) => {
    const seen = new Set();
    return arr.filter(item => {
      const duplicate = seen.has(item.id);
      seen.add(item.id);
      return !duplicate;
    });
  };

  const mergedArray = removeDuplicates(MergedArray);
  console.log(movies)
  console.log(movieDetails)
  console.log(heartDetails)
  console.log(mergedArray);

  // Hàm callback để refresh dữ liệu
  const refreshApiCall = useCallback(() => {
    setRefresh(prev => !prev);
  }, []);

  return (
    <AipContext.Provider value={{ mergedArray, refreshApiCall }}>
      {children}
    </AipContext.Provider>
  );
};

export default ApiFilm;


