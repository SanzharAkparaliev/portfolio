import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
    return (
    <footer class="footer bg-dark">
        
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <p class="para-desc mx-auto mt-4"> Full-Stack Developer with a demonstrated history of
                    working in the computer software industry.</p>
                    <ul class="list-unstyled mb-0 mt-4 social-icon">
                        <li class="list-inline-item"><a  href="https://www.facebook.com/profile.php?id=100030828755069"><FaFacebookF/></a></li>
                        <li class="list-inline-item"><a  href="https://www.instagram.com/akparaliev.s/"> <BsInstagram/> </a></li>
                        <li class="list-inline-item"><a  href="https://www.youtube.com/channel/UCfmVrOam1NckHmCNsHY5ipA"> <BsYoutube/></a></li>
                        <li class="list-inline-item"><a  href="https://t.me/AkparalievS"> <FaTelegramPlane/> </a></li>
                        <li class="list-inline-item"><a  href="https://www.linkedin.com/in/sanzhartaalaibekuulu/"> <AiFillLinkedin /> </a></li>
                    </ul>
                </div>
            </div>
        
        <hr className='HR'/>
        <div class="container text-foot text-center">
         <p class="mb-0">© 2021 Sanzhar Taalaibek uulu uulu</p>
        </div>
    </footer>
    )
}

export default Footer
