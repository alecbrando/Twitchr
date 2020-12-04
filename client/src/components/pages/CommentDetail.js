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


    const renderOut = () => {
        if(userId === props.userId) {
            return <button className={styles.myButton} onClick={onDelete}>Delete</button>
        }
    }

    return (
        <div className={styles.container}>
            <div className="comment">
                <div className="content">
                    <a className="author">{props.username}</a>
                    <div className="text">
                        {props.comment}
                    </div>
                    
                </div>
            </div>
            {renderOut()}
        </div>
    )
}
