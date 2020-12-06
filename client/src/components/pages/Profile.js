import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/actions/actionPicture'
import { allUsers} from '../../store/auth';
import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
    const data = useSelector(state => state.picReducer)
    const users = useSelector(state => state.auth.users)
    const dispatch = useDispatch();
    let value = ''
    useEffect(() => {
        dispatch(getUser(1))
    }, [dispatch])

    useEffect(() => {
        dispatch(allUsers())
    }, [])

    console.log(users)

    const renderOut = () => {
        return data.map((image) => {
            if(image.userId === value.id){
                return (
                    <div key={image.id} className="container">
                        <div className="">
                            <div className="image">
                                <img alt="img" className="image-card" src={image.urlRef} />
                            </div>
                            <div className="content">
                                <div className="description">
                                    <Link to={`/photos/${image.id}`}>{image.body}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            
        })
    }


    if(users){
        value = users[window.location.pathname.slice(9) - 1];
    }



    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">{`Hello,${value.username ? value.username : ''}`}</h1>
                <p className="lead">All your photos are diplayed below.</p>
                <hr className="my-4" />
                <a className="btn btn-dark" href="/photos" role="button">All Photos</a>
            </div>
            <div className="cardContainer">
                <div className="inside-container">
                {renderOut()}
                </div>
            </div>
            
        </>
    )
}
