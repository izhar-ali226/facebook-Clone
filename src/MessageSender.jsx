import React, {useState} from 'react';
import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './Stateprovider';
import db from './firebase';
import firebase from 'firebase'

function MessageSender() {
    const [{user}, dispatch]=useStateValue()

    const [imgUrl,setImgUrl]=useState("")
    const [input ,setInput]= useState("")

    const handleSubmit= (e) => {
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: imgUrl,
            profilePic: user.photoURL,
            username:user.displayName,
            
        })


        e.preventDefault()
        setInput("");
        setImgUrl("");
    }


    return (
        <div className="messageSender">
    
        <div className="messageSenderTop">
        <Avatar src={user.photoURL}/>
        <form>
            <input  className="messageSender_input"
             placeholder= {` Whats on your Mind , ${user.displayName}? `}
             value={input}
             onChange={(e)=>setInput(e.target.value)}
              type="text"/>
            <input
            onChange={(e)=>setImgUrl(e.target.value)} 
             value={imgUrl} className=""
             placeholder="image url(optional)"/>
             <button onClick={handleSubmit} type="submit">
                 Hidden submit
             </button>
        </form>
        </div>
        <div className="messageSenderBottom">
    
        <div className="messageSender_option">
        <VideocamIcon style={{color:"red"}} />
        <h4>live video</h4>
        </div>

        <div className="messageSender_option">
        <PhotoLibraryIcon style={{color:"green"}} />
        <h4>images/video</h4>
        </div>

        <div className="messageSender_option">
        <InsertEmoticonIcon style={{color:"yellow"}} />
        <h4>feelings</h4>
        </div>


        </div>
            
        </div>
    )
}

export default MessageSender
