import React from 'react'
import SocialFollow from "./SocialFollow";
const Calendar = () => {
    return (
        <div>
            <br></br>
           <h1 style={{textAlignVertical: "center",textAlign: "center", color: "#158cba", fontSize: 50}}>Calendar</h1>
           <iframe title="Club Events" src="https://calendar.google.com/calendar/embed?src=66cmarp45lidor56j4gvt322a4%40group.calendar.google.com&ctz=America%2FNew_York" containerstyle="border: 0" width="100%" height="700" frameBorder="0" scrolling="no"></iframe>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <SocialFollow/>
        </div>
        
    )
}

export default Calendar
