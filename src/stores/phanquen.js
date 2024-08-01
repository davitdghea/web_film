import axios from "axios";


const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_TOKEN;
export const Phanquyen = ()=>{
    const getRequestToken = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/authentication/token/new`, {
                params: {
                    api_key: API_KEY
                }
            });
            const requestToken = response.data.request_token;
            console.log('Request Token:', requestToken);
            return requestToken;
        } catch (error) {
            console.error('Error fetching request token:', error);
            throw error;
        }
    };

    const authenticateUser = async () => {
        const requestToken = await getRequestToken();
        if (!requestToken) return;
        localStorage.setItem('request_token', requestToken);
        const authenticateUrl = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/`;
        window.location.href = authenticateUrl;
    };
    authenticateUser()
}

