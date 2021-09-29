import React from 'react'
import "./widgets.css"

function Widgetes() {
    return (
        <div style={{ position: "relative",
            left: "-133px"}} className="widgets">

       <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F%3Fref%3Dpage_internal&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
       
        width="340"
         height="100%"
        style={{border:"none", overflow:"hidden"}}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow=" encrypted-media;"></iframe>
        
            
        </div>
    )
}

export default Widgetes
