import React from 'react'
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Header from './Header';
import Upload from './Upload';
import Home from './Home';
import Photos from './Photos';
import Profile from './Profile';

export default function Pages() {
    return (
        <>
            <Header></Header>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/upload" component={Upload}></Route>
            <Route path="/" exact component={Home}></Route>
            <Route path="/photos" component={Photos}></Route>
            <Route path="/profile" component={Profile}></Route>
        </>
    )
}
