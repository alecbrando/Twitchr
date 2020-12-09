import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { grabComment } from '../../store/actions/actionComment'
import CommentDetail from './CommentDetail';

export default function Comment() {
    const data = useSelector(state => state.commentReducer)
    const user = useSelector(state => state.auth)



    const renderOut = () => {
        if(data[0]){
       return data.map((comment, i) => {
            if (comment.pictureId === parseInt(window.location.pathname.slice(8))){
                return <CommentDetail key={i} username={user.username} comment={comment.comment} id={comment.id} userId={user.id}/>
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
