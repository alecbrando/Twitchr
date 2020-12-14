import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Upload from './Upload';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './Home';
import Photos from './Photos';
import Profile from './Profile';
import SinglePhoto from './SinglePhoto';

export default function Pages() {
    const history = useHistory()
    const loggedout = useSelector(state => !state.auth.id)
    if (loggedout) {
        history.push('/')
      }
    return (
        <>
            {/* <Header></Header> */}
            <Switch>
            <Route path="/login"  component={LoginPage}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/upload"  component={Upload}></Route>
            <Route path="/photos" exact  component={Photos}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/photos/:id" component={SinglePhoto}></Route>
            <Route path="/" exact component={Home}></Route>
            {/* <Footer/> */}
            </Switch>
        </>
    )
}
