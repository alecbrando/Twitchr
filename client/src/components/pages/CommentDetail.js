import React, {useEffect} from 'react';
import styles from '../../scss/comment.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, grabComment } from '../../store/actions/actionComment'


export default function CommentDetail(props) {
    const userId = useSelector(state => state.auth.id)
    const dispatch = useDispatch();

    const onDelete = () => {
        dispatch(deleteComment(props.id))
        props.render()
    }

    console.log(props)

    const renderOut = () => {
        if(userId === props.userId) {
            return <button className="ui button" onClick={onDelete}>Delete</button>
        }
    }

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
                    {renderOut()}
                </div>
            </div>
        </div>
    )
}
