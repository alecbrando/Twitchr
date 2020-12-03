import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { grabComment } from '../../store/actions/actionComment'
import CommentDetail from './CommentDetail';

export default function Comment() {
    const [comment, setComment] = useState('')
    const data = useSelector(state => state.commentReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        let value = window.location.pathname.slice(8);
        dispatch(grabComment(value))
    }, [dispatch])


    const renderOut = () => {
        if(data[0]){
       return data.map(comment => {
            console.log(comment)
            if (comment.pictureId === parseInt(window.location.pathname.slice(8))){
                return <CommentDetail username={comment.User.username} comment={comment.comment} id={comment.id} userId={comment.userId}/>
            } else {
                return (
                    <>
                    </>
                )
            }
        })
    }
    }

    return (
        <>
            {renderOut()}
        </>
    )
}
