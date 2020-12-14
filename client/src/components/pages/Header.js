import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/auth';


export default function Header() {
    const id = useSelector(state => state.auth.id)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(logout());
    }
    const render = id ? (
    <div>
        <Link to="/upload" className='ui inverted button'><i className="upload icon"></i>Upload</Link>
        <Link to={`/profile/${id}`} className='ui inverted button'><i className="user circle icon"></i>Profile</Link>
        <button className="ui inverted button" onClick={handleClick}>Logout</button>
    </div>):(
    <div>
        <Link to="/login" className='ui inverted button'>Log In</Link>
        <Link to="/signup" className='ui inverted button'>Sign Up</Link>
    </div>)



    return (
        <div className="ui inverted vertical masthead center aligned segment">
            <div className="ui container">
                <div className="ui large secondary inverted pointing menu">
                    <Link to="/" className="headerText"><h2>Twtchr</h2></Link>
                    <div className="right item">
                        {render}
                    </div>
                </div>
            </div>
        </div>
    )
}
