import React from 'react'
import styles from '../../scss/comment.module.scss'

export default function CommentDetail(props) {
    console.log(props)
    return (
        <div className={styles.container}>
            <div className="comment">
                <a className="avatar">
                    <i className="avatar circle icon"/>
                </a>
                <div className="content">
                    <a className="author">{props.username}</a>
                    <div className="metadata">
                        <span className="date">5 days ago</span>
                    </div>
                    <div className="text">
                        {props.comment}
                    </div>
                </div>
            </div>
        </div>
    )
}
