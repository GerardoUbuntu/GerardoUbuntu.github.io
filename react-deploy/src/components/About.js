import React from 'react'
import profile from '../images/profile.jpg'

const About = () => {
    return (
    <div style={{textAlign: 'center', marginTop: '100px', width: '100%'}}> 
        <div style={{overflow: 'hidden',  textAlign: 'center',width: '60%'}}>
            <img src={profile} alt="Logo" width='200' height='200' style ={{ borderRadius: '50%'}}/>
            <p> I'm a BS Computer Science Graduate from University of Philippines in the Visayas Tacloban College. Current working 
            at Advanced World Solutions as Junior Research and Development Engineer. </p>
        </div>
    </div>   

    )
}

export default About;
