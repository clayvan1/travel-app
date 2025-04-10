import React from 'react'
import './Middle.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Middle=() =>{
    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, [])

    return(
        <div className='middle section'>
        <div className='secContainer container'>
            <div className='grid'>
                <span className='flex' data-aos="fade-up">
                    <h1>10</h1>
                    <p>
                        World of WonNDER
                    </p>
                </span>
                <span className='flex' data-aos="fade-up">
                    <h1>2K+</h1>
                    <p>
                        Fine DEStiantion
                    </p>
                </span>
                <span className='flex' data-aos="fade-up">
                    <h1>10k+</h1>
                    <p>
                    customer Reviewss
                    </p>
                </span>
                <span className='flex' data-aos="fade-up">
                    <h1>4.8</h1>
                    <p>
                        World of WonNDER
                    </p>
                </span>
            </div>


        </div>
        </div>
    )



}
export default Middle