import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getUser } from '../../store/actions/actionPicture'
import { allUsers} from '../../store/auth';
import { Link } from 'react-router-dom';
import './Profile.css';
import Footer from './Footer.js';


export default function Profile() {
    const data = useSelector(state => state.picReducer.userImages)
    const users = useSelector(state => state.auth.users)
    const dispatch = useDispatch();
    let value = ''
    useEffect(() => {
        console.log('dispatch get user')
        dispatch(getUser(window.location.pathname.slice(8)))
    }, [dispatch])

    useEffect(() => {
        dispatch(allUsers())
    }, [])




    const renderOut = () => {
        return data.map((image) => {
                const date = image.createdAt;
                const year = date.slice(0,4);
                const month = date.slice(5,7);
                const day = date.slice(8,10);
                return (
                    <div key={image.id}>
                        <div className="">
                            <Link to={`/photos/${image.id}`}>
                            <div className="image">
                                <img alt="img" className="image-card" src={image.urlRef} />
                            </div>
                            </Link>
                            <div className="content">
                                <div className="description">
                                    <div>
                                        <span className="featuredText">Posted on {`${month}-${day}-${year}`}</span>
                                    </div>
                                    {image.body}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            
        })
    }


    if(users){
        // console.log(window.location.pathname.slice(9))
        // setValue(users[1])
        Object.keys(users).map((user) => {
            console.log(users[user])
            let id = users[user].id
            console.log(id)
            if(id === parseInt(window.location.pathname.slice(9))){
                value = users[user].username
            }
        })
    }



    return (
        <>
        <div className="profile">
            <div className="jumbotron">
                <h1 className="display-4">{`Hello,${value ? value : ''}`}</h1>
                <p className="lead">All your photos are diplayed below.</p>
                <hr className="my-4" />
                <a className="btn btn-dark" href="/photos" role="button">All Photos</a>
            </div>
            <div className="cardContainer">
                <div className="inside-container">
                {renderOut()}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
