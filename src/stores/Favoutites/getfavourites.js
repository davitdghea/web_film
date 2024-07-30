

// import axios from 'axios';
// import { createContext, useEffect, useState } from 'react';

// export const Favouritescontext = createContext()
// const YOUR_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDUwNjkzMC42Mzg2NjksInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEiAv8Deb0F7d7cXjYyy2jb4YfobeZnSo9vOg-fc3gI';

// const GetFavourites = ({ children }) => {
//     const [Favourites, setFavourites] = useState(false)
//     const [getFavourites, setGetFavourites] = useState([])
//     const [movieFovorates, setMovieFovorates] = useState([])
    
//     const fetchMovieDetails = async (movieId) => {
//         try {
//             const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
//                 params: {
//                     language: 'en-US'
//                 },
//                 headers: {
//                     Authorization: `Bearer ${process.env.API}`
//                 }
//             });
//             const movieDetail = res.data;
//             setMovieFovorates(prevDetails => [...prevDetails, movieDetail]);
//         } catch (error) {
//             console.error(`Error fetching details for movie with ID ${movieId}: `, error);
//         }
//     };
    
//     useEffect(() => {
//         Main()
//     }, [Favourites])
//     useEffect(() => {
//         getFavourites.map(movie=>{
//             fetchMovieDetails(movie.id)
//         })
//     }, [getFavourites])
//     const MovieFovotites = movieFovorates.filter((movie, index, self) => {return index === self.findIndex((t) =>(
//         t.id === movie.id  
//     ))})
//    const td =()=>{
//        setFavourites(!Favourites)
//     }
//     console.log(MovieFovotites)
//     return (
//         <Favouritescontext.Provider value={{ MovieFovotites, td }}>
//                 {children}
//             </Favouritescontext.Provider>
//         )
// }
// export default GetFavourites
