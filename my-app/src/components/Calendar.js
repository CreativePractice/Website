import React from 'react'
import SocialFollow from "./SocialFollow";
import Jumbotron from 'react-bootstrap/Jumbotron';

/*We got a lot of insight into creating the functionality of this page from https://youtu.be/vksO63XQQ3w*/

const Calendar = () => {
    return (
        <div>
           <Jumbotron style={{background: "White"}}>
           <h1 style={{textAlignVertical: "center",textAlign: "center", color: "#4782ed", fontSize: 50}}>Calendar</h1>
           <iframe title="Club Events" src="https://calendar.google.com/calendar/embed?src=66cmarp45lidor56j4gvt322a4%40group.calendar.google.com&ctz=America%2FNew_York" containerstyle="border: 0" width="100%" height="700" frameBorder="0" scrolling="no"></iframe>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <SocialFollow/>
            </Jumbotron>
        </div>
    )
}

export default Calendar
