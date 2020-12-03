import React, {useEffect} from 'react'
import ImageCard from './ImageCard';
import { getPhotos } from '../../store/actions/actionPicture'
import { useDispatch, useSelector } from 'react-redux';
import './Cards.css'

export default function Photos() {
    const data = useSelector(state => state.picReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    const renderOut = () => {
        return data.map((image) => {
                return (
                    <ImageCard key={image.id} image={image}/>
                )
            })
    }

    return (
        <div className="card-container">
            {renderOut()}
        </div>
    )
}
