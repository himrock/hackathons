import React, {useState} from 'react';
import LoginStyle from '../styles/login.module.scss'

const fetchToken = async (credential) => {
    return fetch('http://localhost:8080/login',{
        method: 'POST',
        body: JSON.stringify(credential),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data=> data.json());
}

const Login = (props) => {

    const [name, setName] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const token = await fetchToken({
            name
        });
        props.setToken(token);
    }
    return (
        <form onSubmit={handleSubmit} className={LoginStyle.loginForm}>
            <input type="text" required placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
            <button type="submit">Enter</button>
        </form>
    )
}

export default Login;