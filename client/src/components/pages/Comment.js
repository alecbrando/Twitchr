import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { grabComment } from '../../store/actions'
import CommentDetail from './CommentDetail';

export default function Comment() {
    const [comment, setComment] = useState('')
    const data = useSelector(state => state.picReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        let value = window.location.pathname.slice(8);
        dispatch(grabComment(value))
    }, [])

    console.log(data)
    const renderOut = () => {
    }

    return (
        <>
            <CommentDetail/>
        </>
    )
}
