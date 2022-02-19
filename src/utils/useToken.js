import React, { useState } from 'react'

const useToken = () => {
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    const deleteToken = (value) => {
        localStorage.removeItem(value);
        setToken(null);
    }

    return { 
        token,
        saveToken,
        deleteToken
    }
}

export default useToken;