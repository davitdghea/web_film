import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const Favouritescontext = createContext()
const GetFavourites = ({ children }) => {
    const [getFavourites, setGetFavourites] = useState([])
    const apiGet = async () => {
        try {
            const res = await axios.get('https://api.themoviedb.org/3/account/53542456/favorite/movies', {
                params: {
                    language: "en-US",
                    page: 1,
                    sort_by: 'created_at.asc'
                },
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDUwNjkzMC42Mzg2NjksInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEiAv8Deb0F7d7cXjYyy2jb4YfobeZnSo9vOg-fc3gI'
                }

            })
            setGetFavourites(res.data.results)
        } catch (error) {
            console.error('Error fetching data: ', error);
        }

    }
    useEffect(() => {
        apiGet()
    }, [children])

   
    return (
        <Favouritescontext.Provider value={{ apiGet, getFavourites }}>
            {children}
        </Favouritescontext.Provider>
    )
}
export default GetFavourites
