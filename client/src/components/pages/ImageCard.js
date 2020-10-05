import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

export default function ImageCard(props) {

    const date = props.image.createdAt;
    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    return (
        <div className="one-card container">
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
                        <Link to={`/photos/${props.image.id}`}>{props.image.body}</Link>
                        </div>
                </div>
            </div>
        </div>
        
    )
}
