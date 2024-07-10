import axios from 'axios';
import { useEffect, useState } from 'react';

const key = process.env.API
console.log(key)
const YOUR_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDUwNjkzMC42Mzg2NjksInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEiAv8Deb0F7d7cXjYyy2jb4YfobeZnSo9vOg-fc3gI';
export const RemoteFavorites = ({ idFilm }) => {
    const MOVIE_ID = idFilm;
    const Main = async () => {
        try {
            const response = await axios.post(`https://api.themoviedb.org/3/account/546357/favorite`, {
                media_type: 'movie',
                media_id: MOVIE_ID,
                favorite: true
            }, {
                headers: {
                    Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                },
            });

            console.log('Add favorite response:', response.data);
        } catch (error) {
            console.error('Error adding favorite:', error);
        }
    };
    useEffect(() => {
        Main()
    }, [MOVIE_ID])
}
