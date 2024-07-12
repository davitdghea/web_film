// import axios from 'axios';
// import { createContext, useEffect, useState } from 'react';
// export const Favouritescontext = createContext()
// const GetFavourites = ({ children }) => {
//     const [getFavourites, setGetFavourites] = useState([])
//     const apiGet = async () => {
//         try {
//             const res = await axios.get('https://api.themoviedb.org/3/account/21350099/favorite/movies', {
//                 params: {
//                     language: "en-US",
//                     page: 1,
//                     sort_by: 'created_at.asc'
//                 },
//                 headers: {
//                     accept: 'application/json',
//                     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDUwNjkzMC42Mzg2NjksInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEiAv8Deb0F7d7cXjYyy2jb4YfobeZnSo9vOg-fc3gI'
//                 }

//             })
//             setGetFavourites(res.data.results)
//         } catch (error) {
//             console.error('Error fetching data: ', error);
//         }

//     }
//     useEffect(() => {
//         apiGet()
//     }, [children])

   
//     return (
//         <Favouritescontext.Provider value={{ apiGet, getFavourites }}>
//             {children}
//         </Favouritescontext.Provider>
//     )
// }
// export default GetFavourites





import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const Favouritescontext = createContext()
const YOUR_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDUwNjkzMC42Mzg2NjksInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEiAv8Deb0F7d7cXjYyy2jb4YfobeZnSo9vOg-fc3gI';

const GetFavourites = ({ children }) => {
    const [getFavourites, setGetFavourites] = useState([])
    const [movieFovorates, setMovieFovorates] = useState([])
    const Main = async () => {
       
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/account/635273/favorite/movies`, {
                    headers: {
                        Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    params: {
                        sort_by: 'created_at.asc',
                        page: 1,
                        language: 'en-US',
                       
                    }
                });
                setGetFavourites(response.data.results)
                console.log('Add favorite response:', getFavourites);
            } catch (error) {
                console.error('Error adding favorite:', error);
            }
        };;
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
            setMovieFovorates(prevDetails => [...prevDetails, movieDetail]);
        } catch (error) {
            console.error(`Error fetching details for movie with ID ${movieId}: `, error);
        }
    };
    
    useEffect(() => {
        Main()
    }, [children])
    useEffect(() => {
        getFavourites.map(movie=>{
            fetchMovieDetails(movie.id)
        })
    }, [getFavourites])
    const MovieFovotites = movieFovorates.filter((movie, index, self) => {return index === self.findIndex((t) =>(
        t.id === movie.id  
    ))})

    return (
        <Favouritescontext.Provider value={{ MovieFovotites, Main }}>
                {children}
            </Favouritescontext.Provider>
        )
}
export default GetFavourites
