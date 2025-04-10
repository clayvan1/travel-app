import React, { useState } from 'react'
import './Questions.css'
import "./Accordion"
import Accordion from './Accordion'
import Image1 from '../Assets/lion.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Questions=() =>{
 useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);






const [active, setActive] = useState(
    "How do I choose the right travel destination for me?"
);
return(
        <div className='questions  grid ' >
          <div className='secimg' data-aos="fade-right">
            <img src={Image1} alt="" className='secImage'/>
        </div> 
        <div  className='secContainer '>
        <div className='secHeading '>
            <h3>Frequently Asked Questions</h3> 
        </div> 
        <div className='accordion  ' data-aos="fade-up" >
  <Accordion title=" How do I choose the right travel
destination for me?" desc="Consider your interests, budget, desired
cxpercnces, and the type of envirenment you
enjoy Rescaren cestinations that align with
youdooccndofor auracuons or
activities you find appealing.
" active={active} setActive={setActive}  data-aos="fade-up"/>

  <Accordion title=" what are the best times to visit specific destnations?"
  
  desc="
  The best time to visit a specific destination highly depends on various factors, 
  including your preferences for weather, budget, 
  and the activities you plan to do.
" active={active} setActive={setActive}  /> 
  <Accordion title=" How  can I find a budget friendly travel option?"   
 desc="Consider your interests, budget, desired
cxpercnces, and the type of envirenment you
enjoy Rescaren cestinations that align with
youdooccndofor auracuons or
activities you find appealing.
" active={active} setActive={setActive}   data-aos="fade-up"/>
  <Accordion title=" what essential items should I pack for my adventure"
   desc="Consider your interests, budget, desired
cxpercnces, and the type of envirenment you
enjoy Rescaren cestinations that align with
youdooccndofor auracuons or
activities you find appealing.
" active={active} setActive={setActive} />
            
            
        </div>
             <div className='form' data-aos="fade-up">
            <div className='secHeading'>
 <h4>Do you have specific question?</h4>
 
<p>Please fill the form below and our
dedicated team will get intouch
with you as soonaspossible.</p>
            </div>
          <div className='formcontent  grid'>
         <input type="email" placeholder='Enter email'></input>
         <textarea placeholder='Enter your questions here'></textarea>
         <button className='buton'>Submit Inquiry</button>
          </div>

             </div>

            </div>
            
            
            
        </div>
        

    
        
    )



}
export default Questions