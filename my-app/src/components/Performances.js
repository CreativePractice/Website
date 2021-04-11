import React from 'react'

import img from "../images/FacebookIcon.png";

function myfunction() {
    var win = window.open("https://www.facebook.com/groups/387221978540976/", '_blank');
    if (win != null) {
        win.focus();
      }
}

const Performances = () => {
    return (
        <div>
            <br></br>
           <h1 style={{textAlignVertical: "center",textAlign: "center", color: "#158cba", fontSize: 50}}>Performances</h1>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <iframe width="100%" height="625px" src="https://www.youtube.com/embed/videoseries?list=PL-J1eHouY6DUszb7JyIsEBKBcPOwn5IFv" title="Club Performances" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <footer>
                <div style={{textAlignVertical: "center",textAlign: "center"}}>
                    <button style={{height: "5.5%", width: "5.5%", border: "none", backgroundColor:"transparent"}}><img style={{height: "100%", width: "100%"}} src={img} alt="icon" onClick={myfunction} /></button>
                </div>
            </footer>
            <br></br>
        </div>
    )
}

export default Performances
