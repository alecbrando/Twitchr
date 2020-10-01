import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from '../../store/auth'

export default function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch();

    const currentId = useSelector(state => state.auth.id)


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(username, email, password));
    }

    if(currentId) return <Redirect to="/"/>

    return (
        <div className="adjust">
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui blue image header">
                        <div className="content">Log-in to your account</div>
                    </h2>
                    <form onSubmit={handleSubmit} className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="username" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="mail icon"></i>
                                    <input type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <button type="submit" className="ui fluid large blue submit button">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
}
