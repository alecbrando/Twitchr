import React from 'react'
import { Link } from 'react-router-dom';
import HeaderCSS from './Header.css'
import Logout from './Logout';

export default function Header() {
    return (
        <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
                <div className="ui large secondary inverted pointing menu">
                    <h2 className="active item" href="/">Twtchr</h2>
                    <div className="right item">
                        <Link to="/upload" className="ui inverted button">Upload</Link>
                        <Link to="/login" className="ui inverted button">Log In</Link>
                        <Link to="/signup" className="ui inverted button">Sign Up</Link>
                        <Logout></Logout>
                    </div>
                </div>
            </div>
        </div>
    )
}
