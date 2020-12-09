import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { postToAws } from '../../store/actions/actionPicture'

function Upload() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [filename, setFilename] = useState('')
    const [tags, setTag] = useState('')

    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.auth)
    const userId = user.id
    const userInfo = {userId: user.id ,username: user.username}
    const handleSubmit = (e) => {
        // e.preventDefault();
        const formData = new FormData();
        formData.append('demo_file', filename)
        formData.append('body', body)
        formData.append('title', title)
        formData.append('userId', userId)
        formData.append('tags', tags)
        dispatch(postToAws(formData, userInfo))
        // setTimeout(history.push('/photos'), 10000)
    }

    if(userId === undefined) return <Redirect to="/"/>

    return (
        <div className="adjust contain">
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
                    <label>Tag</label>
                    <input type="text" placeholder="Add a Tag" value={tags} onChange={(e) => setTag(e.target.value)}></input>
                </div>
                <div className="field">
                    <label htmlFor="img">Select Image:</label>
                    <input row="2" type="file" id="img" name="img" onChange={(e) => setFilename(e.target.files[0])}></input>
                    <button onClick={handleSubmit} className="ui primary button subButton" type="submit">Upload</button>
                </div>
            </div>
        </div>
    )
}

export default Upload;
