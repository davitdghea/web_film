import axios from 'axios';
import { useEffect } from 'react';

const YOUR_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjU4N2UzOWRhZTE1YmQ2ODkyODhjYjU4ZTBkMTZlNCIsIm5iZiI6MTcyMDUwNjkzMC42Mzg2NjksInN1YiI6IjY2N2JlNjAxMTI1YjQ2YjY0ZTcyZDk0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEiAv8Deb0F7d7cXjYyy2jb4YfobeZnSo9vOg-fc3gI';

const getRequestToken = async () => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/authentication/token/new', {
            headers: {
                Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.request_token;
    } catch (error) {
        console.error('Error getting request token:', error);
    }
};

const createSession = async (requestToken) => {
    try {
        const response = await axios.post('https://api.themoviedb.org/3/authentication/session/new', {
            request_token: requestToken
        }, {
            headers: {
                Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.session_id;
    } catch (error) {
        console.error('Error creating session:', error);
    }
};

const getAccountId = async (sessionId) => {
    try {
        const response = await axios.get('https://api.themoviedb.org/3/account', {
            headers: {
                Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            params: {
                session_id: sessionId
            }
        });
        return response.data.id; // Đây là account_id
    } catch (error) {
        console.error('Error getting account ID:', error);
    }
};

const addFavorite = async (sessionId, accountId, movieId) => {
    try {
        const response = await axios.post(`https://api.themoviedb.org/3/account/${accountId}/favorite`, {
            media_type: 'movie',
            media_id: movieId,
            favorite: true
        }, {
            headers: {
                Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            params: {
                session_id: sessionId
            }
        });
        console.log('Add favorite response:', response.data);
    } catch (error) {
        console.error('Error adding favorite:', error);
    }
};
export const Favorites = ({ idFilm })=>{
    const MOVIE_ID = idFilm;
const Main = async () => {
    const requestToken = await getRequestToken();
    alert(`Please authenticate the request token at: https://www.themoviedb.org/authenticate/${requestToken}`);
    // Bạn cần phải mở URL trên trình duyệt để xác thực request token, sau khi xác thực thì tiếp tục các bước dưới đây.
    // Bạn có thể tạm dừng ở đây và yêu cầu người dùng xác thực token trước khi tiếp tục
    await new Promise(resolve => setTimeout(resolve, 30000)); // Đợi 30 giây để xác thực
    
    const sessionId = await createSession(requestToken);
    const accountId = await getAccountId(sessionId);
    await addFavorite(sessionId, accountId, MOVIE_ID); // Thay MOVIE_ID bằng ID của phim bạn muốn thêm
};
    useEffect(() => {
        Main()
    }, [MOVIE_ID])
}
// Gọi hàm main để chạy toàn bộ quy trình

