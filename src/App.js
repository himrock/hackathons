import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import React, {useState} from 'react';
import Header from './components/header';
import MyPosts from './components/MyPosts'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import useToken from './utils/useToken'

// function setTokenValueToSession(userToken) {
//   localStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = localStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

function App() {
  const { token, saveToken, deleteToken } = useToken();

  console.log("token=>",token);
  // const [token, setToken] = useState(getToken());

  // const setTokenValue = (value) => { 
  //   setToken(value.token);
  //   setTokenValueToSession(value);
  // }

  if(!token){
    return <Login setToken={saveToken}/>
  }

  return (
    <div className="App">
      <Router>
        <Header deleteToken={deleteToken}/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
          <Route exact path="/myposts" element={<MyPosts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
