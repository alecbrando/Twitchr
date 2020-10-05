import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { grabComment } from '../../store/actions'

export default function Comment() {
    const [comment, setComment] = useState('')
    const data = useSelector(state => state)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(grabComment())
    }, [dispatch])
    
    return (
        <div className="comment">
            <a className="avatar">
                <i className="avatar circle icon"/>
            </a>
            <div className="content">
                <a className="author">Joe Henderson</a>
                <div className="metadata">
                    <span className="date">5 days ago</span>
                </div>
                <div className="text">
                    Dude, this is awesome. Thanks so much
                </div>
            </div>
        </div>
    )
}
