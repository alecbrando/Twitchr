import React from 'react'
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { useSelector } from 'react-redux';


export default function Header() {
    const userId = useSelector(state => state.auth.id)
    
    const render = userId ? (
    <div>
        <Link to="/upload" className='ui inverted button'><i className="upload icon"></i>Upload</Link>
        <Link to={`/profile/${userId}`} className='ui inverted button'><i className="user circle icon"></i>Profile</Link>
    </div>):(
    <div className="hidden">
        <Link to="/login" className='ui inverted button'>Log In</Link>
        <Link to="/signup" className={`${window.location.pathname === '/signup' ? 'active' : ''} ui inverted button`}>Sign Up</Link>
    </div>)

    return (
        <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
                <div className="ui large secondary inverted pointing menu">
                    <Link className='active item' to="/"><h2>Twtchr</h2></Link>
                    <div className="right item">
                        {render}
                        <Logout></Logout>
                    </div>
                </div>
            </div>
        </div>
    )
}
