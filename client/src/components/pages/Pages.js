import React from 'react'
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Header from './Header';
import Upload from './Upload';


export default function Pages() {
    return (
        <>
            <Header></Header>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/upload" component={Upload}></Route>
        </>
    )
}
