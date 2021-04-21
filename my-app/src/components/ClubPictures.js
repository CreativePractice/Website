import React from 'react'
import Button from 'react-bootstrap/Button'

/*We got a lot of insight into creating the functionality of this page from https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react*/

const ClubPictures = () => {
    return (
        <div style={{textAlignVertical: "center",textAlign: "center"}}>
            <a href="https://drive.google.com/drive/folders/1ETcmSOtdTTbZZfmgAZ2--ngLHpgaCKQK?usp=sharing" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg">
                More Club Pictures
            </Button>
            </a>
        </div>

        );
}

export default ClubPictures
