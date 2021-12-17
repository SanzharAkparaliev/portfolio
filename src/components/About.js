import React from 'react'
import Me from "../components/me1.jpg";
const About = () => {
    return (
        <div className='about py-5' id='aboutme'>
            <div className='container p-5'>
                <div className='row'>
                    <div className='col-lg-5'>
                        <img className='img-fluid' src={Me} alt='me'/>
                    </div>
                    <div className='col-lg-7'>
                        <h1>Sanzhar Taalaibek uulu</h1>
                        <p className='skils'>Full-Stack Web Developer</p>
                        <p className='HII'>Hi,I am beginner  Full-Stack Developer. 
                        Skilled in React,NodeJS and Spring Boot.
                        Strong engineering professional with a Bachelor's degree in Computer Science of Kyrgyz-Turkish Manas University
                        </p>
                        <p className='tech'>React + Redux (JavaScript): 9 months </p>
                            <div className='progress'>
                                <div className='pro-value2'>
                                     <span className='text-white float-rigth'></span>
                                 </div>
                            </div> 
                        <p className='tech'>SCSS + CSS (Bootstrap): 1 years</p>
                            <div className='progress'>
                                <div className='pro-value1'>
                                        <span className='text-white float-rigth'></span>
                                </div>
                            </div>
                       
                       <p className='tech'>NodeJS(Express.JS): 8 months </p>
                            <div className='progress'>
                                <div className='pro-value3'>
                                        <span className='text-white float-rigth'></span>
                                </div>
                            </div>
                         <p className='tech'>Spring Boot (Java): 2 months</p>
                            <div className='progress'>
                                <div className='pro-value4'>
                                        <span className='text-white float-rigth'></span>
                                </div>
                            </div>
                      
                      
                       <p className='tech'>REST API:  8 months </p>
                            <div className='progress'>
                                <div className='pro-value5'>
                                        <span className='text-white float-rigth'></span>
                                </div>
                            </div>
                    </div>
                    
                    <div className='contactMe'>
                        <input type="button" className='btn1' value="Download C.V"/>
                        <input type="button" className='btn2' value="Contact Us"/>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default About;
