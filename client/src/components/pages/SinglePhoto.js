import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto, postComment, grabComment } from '../../store/actions'
import Comment from './Comment';

export default function SinglePhoto() {
    const [text, setText] = useState('')
    const data = useSelector(state => state.picReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        let value = window.location.pathname.slice(8);
        dispatch(getPhoto(value))
        
    }, [dispatch])



    const onSubmit = (e) => {
        const obj = {
            comment: text,
            userId: data[0].userId,
            pictureId: window.location.pathname.slice(8)
        }
        dispatch(postComment(obj))
    }

    let value = ''
    if(data[0]){
        console.log(data)
        value = data[0].urlRef;
    }

    return (
        <>
            <div className="jumbotron">
                <img alt="img" height="500" src={`${value}`}/>
            </div>
            <div>
                <Comment></Comment>
            </div>
            <div>
                <form className="ui reply form">
                    <div className="field">
                        <textarea onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                    <div className="ui blue labeled submit icon button">
                        <i className="icon edit" onClick={onSubmit}></i> Add Reply
                    </div>
                </form>
            </div>
        </>
    )
}
