import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { grabComment } from '../../store/actions/actionComment'
import CommentDetail from './CommentDetail';

export default function Comment() {
    const data = useSelector(state => state.commentReducer)
    const dispatch = useDispatch();
    let value = window.location.pathname.slice(8);

    useEffect(() => {
        dispatch(grabComment(value))
    }, [dispatch])

    const rerender = () => {
        dispatch(grabComment(value))
    }


    const renderOut = () => {
        if(data[0]){
       return data.map(comment => {
            console.log(comment)
            if (comment.pictureId === parseInt(window.location.pathname.slice(8))){
                return <CommentDetail username={comment.User.username} comment={comment.comment} id={comment.id} userId={comment.userId} render={rerender}/>
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
