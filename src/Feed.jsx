import React, { useState, useEffect } from 'react'
import StoryReel from './StoryReel';
import MessageSender from './MessageSender'
import Post from './Post';
import "./Feed.css"
import db from './firebase';

function Feed() {


    const [posts,setPosts]= useState([]);

    useEffect(() => {
      db.collection('posts').orderBy("timestamp","desc").onSnapshot((Snapshot)=>
      setPosts(Snapshot.docs.map((doc)=> ({ id: doc.id, data: doc.data() })))

      )
    }, [])

    return (
        <div className="feed">

        <StoryReel />
        <MessageSender />

        { posts.map((post)=> (
            <Post
            key={post.data.id}
            username={post.data.username}
            timestamp={post.data.timestamp}
            profilePic={post.data.profilePic}
            message={post.data.message}
            image={post.data.image}
            />
        ))}   
        </div>
    )
}

export default Feed
