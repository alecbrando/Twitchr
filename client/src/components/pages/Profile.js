import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/actions/actionPicture'
import { allUsers} from '../../store/auth';
import { Link } from 'react-router-dom';
import './Profile.css';
import Footer from './Footer';

export default function Profile() {
    const data = useSelector(state => state.picReducer)
    const users = useSelector(state => state.auth.users)
    const dispatch = useDispatch();
    let value = ''
    useEffect(() => {
        dispatch(getUser(window.location.pathname.slice(8)))
    }, [dispatch])

    useEffect(() => {
        dispatch(allUsers())
    }, [])


    const renderOut = () => {
        return data.map((image) => {
            console.log(data)
            if(image.userId === value.id){
                const date = image.createdAt;
                const year = date.slice(0,4);
                const month = date.slice(5,7);
                const day = date.slice(8,10);
                console.log(image)
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
            <Footer/>
        </>
    )
}
