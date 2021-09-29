import { Avatar } from '@material-ui/core';
import React from 'react';
import './post.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({profilePic, username, message, image, timestamp}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar  src={profilePic} className="post_avatar" />
                <div className="post_topInfo">
                    <h3> {username} </h3>
                    <p>{new Date(timestamp?.toDate()).toLocaleTimeString()}</p>
                </div>
            </div>
            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_img">
                <img src={image} alt=""/>
            </div>
            <div className="post_options">
                <div className="post_option">
                <ThumbUpAltIcon/>
                <p>Like</p>
                </div>
                <div className="post_option">
                <ChatIcon/>
                <p>Comment</p>
                </div>
                <div className="post_option">
                <NearMeIcon/>
                <p>Share</p>
                </div>
                
                 <div className="post_option">
                <AccountCircleIcon/>
                <ExpandMoreIcon/>
                {/* <p>Account</p> */}
                </div>
            </div>
        </div>
    )
}

export default Post
