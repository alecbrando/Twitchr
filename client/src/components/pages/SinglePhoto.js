import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto} from '../../store/actions/actionPicture'
import { postComment } from '../../store/actions/actionComment'
import Comment from './Comment';
import styles from '../../scss/photo.module.scss'

export default function SinglePhoto() {
    const [text, setText] = useState('')
    const data = useSelector(state => state.picReducer)
    const dispatch = useDispatch();
    let value = window.location.pathname.slice(8);

    useEffect(() => {
        dispatch(getPhoto(value))
    }, [])



    const onSubmit = (e) => {
        e.preventDefault()
        if(text.length > 2){
            const obj = {
                comment: text,
                userId: data[0].userId,
                pictureId: window.location.pathname.slice(8)
            }
            dispatch(postComment(obj))
        }
    }




    let val = ''
    if(data[0]){
        console.log(data)
        val = data[0].urlRef;
    }

    return (
        <>
            <div className="jumbotron">
                <img alt="img" height="500" src={`${val}`}/>
            </div>
                <div className={styles.commentContainer}>
            </div>
            <div className={styles.middleContainer}>

            </div>
            <div className={styles.textContainer}>
                <form onSubmit={onSubmit}  className="ui reply form">
                    <div >
                        <textarea className={styles.textArea} rows="4" cols="200" placeholder="Add a Comment" onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                    <div>
                        <button className={styles.myButton} type="submit">Add Reply</button>
                    </div>
                </form>
                <Comment/>
            </div>
        </>
    )
}
