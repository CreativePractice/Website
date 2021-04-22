import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Row} from "react-bootstrap";
import {
    faYoutube,
    faFacebook
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faGlobe,
    faEnvelope
   } from '@fortawesome/free-solid-svg-icons';
  //  import {
  //    faEnvelope
  //  } from '@fontawesome/free-solid-svg-icons';

   function ShowEmail()
   {
     alert("Send us an E-mail at crpufcom@gmail.com");
   }

function SocialFollow() {
  return (
      <div className="social-container">
        <h3 style={{ textAlignVertical: "center", textAlign: "center" }}>Connect with us</h3>
        <Row className="justify-content-center">
        <a href="https://www.youtube.com/channel/UCKg-lFILwy3LS5XP9zajE7A" target="_blank" rel="noopener noreferrer"
          className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://www.facebook.com/groups/387221978540976/" target="_blank" rel="noopener noreferrer"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://mcc.med.ufl.edu/organizations/cpr/" target="_blank" rel="noopener noreferrer"
          className="web social">
          <FontAwesomeIcon icon={ faGlobe } size="2x" />
        </a>
        <button onClick={ShowEmail} style = {{borderBlockColor: "transparent"}}
          className="envelope social">
          <FontAwesomeIcon icon={ faEnvelope } size="2x" />
        </button> 
        </Row>
      </div>
  );
}

export default SocialFollow;