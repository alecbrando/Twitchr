import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from '../../store/actions'
import Comment from './Comment';

export default function SinglePhoto() {
    const data = useSelector(state => state.picReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        let value = window.location.pathname.slice(8);
        dispatch(getPhoto(value))
    }, [dispatch])

    console.log(data)

    const onSubmit = (e) => {
        
    }

    let value = ''
    if(data[0]){
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
                        <textarea></textarea>
                    </div>
                    <div className="ui blue labeled submit icon button">
                        <i className="icon edit"></i> Add Reply
                    </div>
                </form>
            </div>
        </>
    )
}
