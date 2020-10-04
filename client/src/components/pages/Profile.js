import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/actions'
import './Profile.css';

export default function Profile() {
    const data = useSelector(state => state.picReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(1))
    }, [dispatch])

    console.log(data)

    return (
        <>
            <div className="jumbotron">
                <h1 className="display-4">{`Hello, `}</h1>
                <p className="lead">All your photos are diplayed below.</p>
                <hr className="my-4"/>
                <a className="btn btn-dark" href="/photos" role="button">All Photos</a>
            </div>
            {/* <div className="one-card container">
                <div className="ui card">
                    
                    <div className="image">
                        <img alt="img" src={props.image.urlRef}/>
                    </div>
                    <div className="content">
                        <a className="header" href={`/profile/${props.image.userId}`}><i className="user icon" />{props.image.User.username}</a>
                        <div className="meta">
                        <span className="date">Posted on {`${month}-${day}-${year}`}</span>
                        </div>
                            <div className="description">
                            {props.image.body}
                            </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
