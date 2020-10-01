import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { postToAws } from '../../store/actions'

function Upload() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [filename, setFilename] = useState('')

    const dispatch = useDispatch();

    const userId = useSelector(state => state.auth.id)

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('demo_file', filename)
        formData.append('body', body)
        formData.append('title', title)
        formData.append('userId', userId)
        dispatch(postToAws(formData));
    }


    return (
        <div className="adjust">
            <div  className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea row="2" type="text" placeholder="Description" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
                <div className="field">
                    <label htmlFor="img">Select Image:</label>
                    <input row="2" type="file" id="img" name="img" onChange={(e) => setFilename(e.target.files[0])}></input>
                    <button onClick={handleSubmit} className="ui primary button" type="submit">Submit</button>
                </div>
            </div>
        </div>
        
    )
}

export default Upload;
