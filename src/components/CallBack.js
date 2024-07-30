import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_API_TOKEN;

const Callback = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const createSessionId = async (requestToken) => {
            try {
                const response = await axios.post(`${BASE_URL}/authentication/session/new`, {
                    request_token: requestToken
                }, {
                    params: { api_key: API_KEY }
                });
                const sessionId = response.data.session_id;
                console.log('Session ID:', sessionId);
                localStorage.setItem('session_id', sessionId);
                navigate('/'); // Chuyển hướng về trang chủ hoặc trang bạn muốn
            } catch (error) {
                console.error('Error creating session ID:', error);
            }
        };

        const params = new URLSearchParams(location.search);
        const requestToken = params.get('request_token');

        if (requestToken) {
            createSessionId(requestToken);
        }
    }, [location.search, navigate]);

    return (
        <div>
            <h1>Processing authentication...</h1>
        </div>
    );
};

export default Callback;
