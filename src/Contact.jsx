import { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {

  return (
    <div>
      <h2 className="who" >Contact US</h2>

       <div className="three ab sta"> 
            <div className="icon-box for">
        <form action="" method="post" >
            <input  type="text" name="text" id="f" placeholder="Your Name" required/>
            <input type="email" name="email" id="f" placeholder="Your Email" required/>
            <input type="text" name="text" id="s" placeholder="Subject" required/>
            <input type="text" name="text" id="s" placeholder="Message" required/>
            <input type="submit" className="submit" value="Send Message"/>

        </form>

            </div>

            <div  className="icon-box " id="conta">
                <div className="t" >
                    <FontAwesomeIcon icon={faEnvelope} />
                <div>
                        <p>Email:</p>
                        <p id='mail'>mmdohsamir91@gmail.com</p>
                    </div>
                </div>
                <div className="t" >
                <FontAwesomeIcon icon={faPhone}  />
                <div>
                        <p>Call:</p>
                        <p>(+2) 01227432207</p>
                    </div>
                </div>
                <div className="t" ><FontAwesomeIcon icon={faLocationDot}  />
                    <div>
                        <p>Location:</p>
                        <p>The Greek Campus, 28 Falaki St., Downtown, Cairo, Egypt</p>
                    </div>
                </div>
                <div id="start">
                    <a href="www.linkedin.com/in/mamdoh-samer-mohammed-fared-36a526297">
                    <FontAwesomeIcon icon={faFacebookF} size="" color="" id='icon'/>
                    </a>
                    <FontAwesomeIcon icon={faWhatsapp} size="" color="" id='icon'/>

                </div>
            </div>
    </div>
    </div>
  )
}

export default Contact