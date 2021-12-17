import React from 'react';
import Typed  from "react-typed";
const Header = () => {
    return (
        <div className='header-wraper'>
            <div className='main-info'>
                <h1>web development and website promotions</h1>
                <Typed
                    className='typed-text'
                    strings={["I Am Sanzhar","I Am Full-Stack Web Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header;
