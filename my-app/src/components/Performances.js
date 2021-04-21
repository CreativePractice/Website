import React from 'react'
import SocialFollow from "./SocialFollow";
import Jumbotron from 'react-bootstrap/Jumbotron';

/*We got a lot of insight into creating the functionality of this page from https://support.google.com/youtube/answer/171780?hl=en*/

const Performances = () => {
    return (
        <div>
            <Jumbotron style={{background: "White"}}>
           <h1 style={{textAlignVertical: "center",textAlign: "center", color: "#4782ed", fontSize: 50}}>Performances</h1>
           <br></br>
           <br></br>
           <br></br>
           <iframe width="100%" height="625px" src="https://www.youtube.com/embed/videoseries?list=PL-J1eHouY6DUszb7JyIsEBKBcPOwn5IFv" title="Club Performances" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <SocialFollow />
           </Jumbotron>
        </div>
    )
}

export default Performances
