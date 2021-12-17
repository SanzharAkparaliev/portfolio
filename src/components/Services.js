import React from 'react'
import dev from "../components/code-slash.svg"
import connec from "../components/gear-wide-connected.svg"
import people from "./people-fill.svg"
const Services = () => {
    return (
        <section className='services py-5 bg-light' id='services'>
            <div className='container'>
                <h1 className='text-center serv'>Services.</h1>
                <div className='row pb-3'>
                    <div className='col-lg-4 mb-3'>
                        <div className='card text-center py-3'>
                            <div className='card-body'>
                                <div className='circle'>
                                <img src={dev} alt="" />
                                </div>                            
                                <h4 className='font-weight-bold pg-2'>Full-Stack Web Development</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lonturies,jbf jsk oijoij e </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <div className='card text-center py-3'>
                            <div className='card-body'>
                                <div className='circle'>
                                <img src={connec} alt="" />
                                </div>                            
                                <h4 className='font-weight-bold pg-2'>Promotion</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lonturies,jbf jsk oijoij e </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 mb-3'>
                        <div className='card text-center py-3'>
                            <div className='card-body'>
                                <div className='circle'>
                                <img src={people} alt="" />
                                </div>                            
                                <h4 className='font-weight-bold pg-2'>Consultation</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lonturies,jbf jsk oijoij e </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services;
