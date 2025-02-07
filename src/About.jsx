import { useState } from 'react'
import logoo from "/images/meat-4.png";
import logoa from "/images/map.jpg";
import logob from "/images/deltaservice.png";
import logoc from "/images/medal.png";
import logod from "/images/7630510.png";
import './About.css'



function About() {
    return (
      <div id="nig">
        <p className="About">
          We are committed to providing the freshest, highest-quality meats, promoting healthier lifestyles through natural, unprocessed options. Our focus is on supporting the well-being of our communities and ensuring the sustainability of our planet, one meal at a time.
        </p>
        <div className="det">
          <div className="meat">
            <img className="mar" src={logoo} alt="" width="80px" />
            <p className="amounts">9824911 Kg</p>
            <p className="amounts">of fresh meat delivered sustainably.</p>
          </div>
  
          <div className="money">
            <img src={logod} alt="" width="100px" />
            <p className="amounts">$0</p>
            <p className="amounts">in revenue created.</p>
          </div>
        </div>
  
        <div className="ab ff">
          <p className="details">
            <strong>Beefilo :</strong> is an Egyptian fresh meat start-up that focuses on delivering high-quality, unprocessed cuts of meat. Established in 2024, the company is headquartered in Cairo and serves multiple cities and rural areas across the country.
            <br />
            <br />
            <strong>Beefilo :</strong> approaches the industry differently, seeing meat as a cornerstone of healthier and more sustainable eating habits. The company’s mission is to provide fresh, natural meat while supporting the well-being of families and ensuring environmental sustainability through ethical sourcing and minimal waste practices.
            <br />
            <br />
            <strong>Beefilo :</strong> creates a reliable ecosystem for delivering premium, fresh meat directly to households and businesses, emphasizing convenience and trust. The company offers tailored delivery services, making it easy for customers to enjoy nutritious meals with confidence in their quality and origin.
            <br />
            <br />
            This positions Beefilo as a leader in sustainable and customer-focused meat distribution.
          </p>
          <img src={logoa} alt="map" width="45%" id="map" />
        </div>
        <h2 className="who">Who We Are</h2>
            <div className="ab three"> 
                <div className="icon-box">
                    <img src={logob} alt=""/>
                    <p>Our Service</p>
                </div>
                <div className="icon-box">
                    <img src={logoc} alt=""/>


                    <p>Quality</p>
                 </div>
                <div className="icon-box">
                    <img src={logoo} alt="" id="Service"/>
                    <p >Fresh</p> 
                </div>
            </div>
      </div>
    );
  }
  
  export default About;
  
