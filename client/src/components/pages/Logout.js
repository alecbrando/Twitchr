import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth';
import {Redirect} from 'react-router-dom';

export default function Logout() {
    const loggedout = useSelector(state => !state.auth.id)
    const dispatch = useDispatch();

    const handleClick = () => dispatch(logout);

    if (loggedout)return <Redirect to="/"/>

    return (
        <>
            <button className="ui inverted button" onClick={handleClick}>Logout</button>
        </>
    )
}
