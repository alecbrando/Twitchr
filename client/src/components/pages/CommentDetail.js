import React from 'react'

export default function CommentDetail(props) {
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
