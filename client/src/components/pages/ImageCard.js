import React from 'react';
import styles from '../../scss/imageCard.module.scss';
import { Link } from 'react-router-dom';

export default function ImageCard(props) {

    const date = props.image.createdAt;
    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    return (
            <div className={styles.container}>
                    <div className="">
                        <div className={styles.headerContainer}>
                            <Link className={styles.textHeader} href={`/profile/${props.image.userId}`}>{props.image.User.username}</Link>
                            <div className={styles.featuredText}>Featured</div>
                        </div>
                        <Link className="card-link" to={`/photos/${props.image.id}`}>
                        <div className="image">
                            <img alt="img" className="image-card" src={props.image.urlRef}/>
                        </div>
                        </Link>
                        <div className={styles.content}>
                            <div className="meta">
                                <span className={styles.featuredText}>Posted on {`${month}-${day}-${year}`}</span>
                            </div>
                            <div className="description">
                                {props.image.title}
                            </div>
                        </div>
                    </div>
            </div>
    )
}
