import React from 'react'
import img from "../images/FacebookIcon.png";

function myfunction() {
    var win = window.open("https://www.facebook.com/groups/387221978540976/", '_blank');
    if (win != null) {
        win.focus();
      }
}

const Calendar = () => {
    return (
        <div>
            <br></br>
           <h1 style={{textAlignVertical: "center",textAlign: "center", color: "#158cba", fontSize: 50}}>Calendar</h1>
           <iframe title="Club Events" src="https://calendar.google.com/calendar/embed?src=66cmarp45lidor56j4gvt322a4%40group.calendar.google.com&ctz=America%2FNew_York" containerStyle="border: 0" width="100%" height="700" frameborder="0" scrolling="no"></iframe>
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

export default Calendar
