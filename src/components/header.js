import React from 'react';
import HeaderStyle from '../styles/header.module.scss'
import {Link} from 'react-router-dom'

const Header = (props) => {
    const handleLogout=(e)=>{
        e.preventDefault();
        props.deleteToken('token')
    }
    return (
        <div className={HeaderStyle.headWrap}>
            <Link to="/" className="logo">CompanyLogo</Link>
            <div className={HeaderStyle.headerRight}>
                <Link to="/myposts">MyPost</Link>
                <a onClick={(e) => handleLogout(e)}>LogOut</a>
            </div>
        </div>
    )
}

export default Header;