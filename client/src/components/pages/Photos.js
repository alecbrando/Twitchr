import React, {useEffect} from 'react'
import ImageCard from './ImageCard';
import { getPhotos } from '../../store/actions/actionPicture'
import { useDispatch, useSelector } from 'react-redux';
import './Cards.css'
import Footer from './Footer.js';
import Header from './Header.js';

export default function Photos() {
    const data = useSelector(state => state.picReducer.allImages)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])
    console.log(data)
    const renderOut = () => {
        return data.map((image) => {
            console.log(image)
                return (
                    <ImageCard key={image.id} image={image}/>
                )
            })
    }

    return (
        <>
            <Header/>
            <div className="card-container">
                <div className="inside-container">
                    {renderOut()}   
                </div>
            </div>
            <Footer/>
        </>
    )
}
