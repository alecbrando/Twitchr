import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/actions/actionPicture'
import { Link } from 'react-router-dom';
import './Profile.css';

export default function Profile() {
    const data = useSelector(state => state.picReducer)
    const user = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        let value = window.location.pathname.slice(8);
        dispatch(getUser(1))
    }, [dispatch])



    const renderOut = () => {
        return data.map((image) => {
            if(image.userId === user.id){
                return (

                    <div key={image.id} className="one-card container">
                        <div className="ui card">
    
                            <div className="image">
                                <img alt="img" src={image.urlRef} />
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

    console.log(data)

    let value = ''
    if(data[0]){
        value = data[0].User.username;
    }

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">{`Hello, ${user.username}`}</h1>
                <p className="lead">All your photos are diplayed below.</p>
                <hr className="my-4" />
                <a className="btn btn-dark" href="/photos" role="button">All Photos</a>
            </div>
            <div className="card-container">
                <div className="inside-container">
                {renderOut()}
                </div>
                
            </div>
            
        </>
    )
}
