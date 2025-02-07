import { useState } from 'react'

import './header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


function Header() {

  return (
    <div>
      <header>
        <a href="#first"><img src="../Red Circle Steak House Logo.png" alt="icon" className="iconn" width="90px"/></a>
        <div className="tabs">
            <a href="#first">Home</a>
            <a href="#About">About</a>
            <a href="#Service">Service</a>
            <a href="#Contact US">Contact US</a>
        </div>
        <div className="facebook">
        <FontAwesomeIcon icon={faFacebookF} size="" color="" id='icon'/>
        <FontAwesomeIcon icon={faWhatsapp} size="" color="" id='icon'/>
        </div>
    </header>
     <i id="first"></i>
     <br/><br/><br/><br/>
    </div>
  )
}

export default Header
