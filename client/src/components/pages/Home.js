import React from 'react'
import './Splash.css'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/auth';

export default function Home() {

    const dispatch = useDispatch();
    const currentId = useSelector(state => state.auth.id)
    const handleClick = () => {
        dispatch(login('Demo-lition', 'password'));
    }

    if(currentId) return <Redirect to="/photos"/>

    return (
        <div>
            <div className="start">
                <div>
                    <h2>“Every artist was first an amateur” Ralph Waldo Emerson</h2>
                </div>
                
            </div>
            <div className="button">
                <div>
                    <button onClick={handleClick} className="black ui button" >Start Demo</button>
                </div>
            </div>
        </div>
    )
}
