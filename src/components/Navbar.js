import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"

const Navbar = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light bg-dark fixed-top">
   
        <a className="navbar-brand" href="/"> <h2 className='logo'>SanTECH</h2> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
       </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#aboutme">about me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#services">services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#workExperience">how work</a>
            </li> 
            <li className="nav-item">
                <a className="nav-link" href="#contacts">Contacts</a>
            </li>
                 <li className="nav-item">
                <a className="nav-link insta" href="https://www.instagram.com/akparaliev.s/"><BsInstagram/></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link linked" href="https://www.linkedin.com/in/sanzhartaalaibekuulu/"><AiFillLinkedin/> </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link git" href="https://github.com/SanzharAkparaliev"> <BsGithub /> </a>
                </li>       
            </ul>   
        </div>
</nav>
    )
}

export default Navbar
