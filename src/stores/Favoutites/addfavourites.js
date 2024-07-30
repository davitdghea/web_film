import axios from 'axios';
import { useEffect } from 'react';



export const Favorites = ({ idFilm, onComplete }) => {
    const MOVIE_ID = idFilm;
    const sessionId = localStorage.getItem('sessionId')
    useEffect(() => {
    const Main = async () => {
        
        try {
            const response = await axios.post(
                `https://api.themoviedb.org/3/account/21350099/favorite`,
                {
                    media_type: 'movie',
                    media_id: MOVIE_ID, 
                    favorite: true 
                },
                {
                    params: {
                        api_key: process.env.REACT_APP_API_TOKEN,
                        session_id: sessionId
                    }
                }
            );

            console.log('Add favorite response:', response.data);
            onComplete()
        } catch (error) {
            console.error('Error adding favorite:', error.response?.data || error.message);
            onComplete()
        }
    };

    // Sử dụng hàm
    Main();
    }, [MOVIE_ID, sessionId, onComplete]);
    return null;
}
