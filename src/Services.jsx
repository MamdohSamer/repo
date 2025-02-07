
import { useState } from 'react'
import './Services.css'
import logo from "/images/delivery-truck.png";
import logoa from "/images/shop.png";
import logob from "/images/fast-food.png";



function Services() {

  return (
    <div>
       <h2 className="who">We Provide Best Services</h2>
            <p >You can count on Beefilo to deliver the freshest, highest-quality meats with exceptional reliability and care.</p>
            <div className="ab three del"> 
                <div className="icon-box">
                    <img src="{logo} alt=""/>
                    <p>Establishing Convenient Delivery Points for Fresh Meat</p>
                    <p>Through our dedicated delivery team, we bring fresh meat directly to your doorstep after scheduling an appointment, ensuring convenience and quality.</p>

                </div>
                <div className="icon-box">
                    <img src={logoa} alt=""/>
                    <p className="marr">Creating Fixed Delivery Points for Fresh Meat</p>
                    <p>By partnering with small shops across urban, suburban, and rural areas, we make it easy for households to exchange used cooking oil for cash.</p>

                 </div>
                <div className="icon-box">
                    <img src={logob} alt="" />
                    <p >Sourcing Fresh Meat from Trusted Farms</p> 
                    <p id="Contact US">If you are a restaurant, butcher, or grocery owner, Beefilo delivers fresh, premium-quality meats right to your door, supporting your business with reliability and sustainability.</p>

                </div >
            
            </div>

    </div>
  )
}

export default Services
