import React from 'react'
import phone from "../components/telephone-fill.svg"
import email from "../components/envelope.svg"
import message from "../components/send-fill.svg"
const Contact = () => {
    return (
        <section className='contact ' id='contacts'>
                <h1 className='text-center serv'>Contact Us.</h1>
                <div className='row '>
                    <div className='col-lg-10 mx-auto'>
                        <div className='row text-center'>
                            <div className='col-lg-4'>
                                <div className='circle1'>
                                    <img src={phone} alt='phone'/>
                                </div>
                                <h5>Phone</h5>
                                <p>+996 776 26 23 28</p>
                            </div>
                            <div className='col-lg-4'>
                                <div className='circle1'>
                                <img src={email}  alt='email'/>
                                </div>
                                <h5>Email</h5>
                                <p>taalaibekuulusanzhar@gmail.com</p>
                            </div>
                            <div className='col-lg-4'>
                            <div className='circle1'>
                            <img src={message} alt='mes'/>
                                </div>
                                <h5>Address</h5>
                                <p>Djal-23 16-18 Bishkek Kyrgyzstan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-9 mx-auto'>
                        <form action=''>
                                <div className='form-row'>
                                    <div className='col-lg-6'>
                                        <input type="text" className='form-control bg-ligth mb-3' placeholder='Your Name* :' />
                                    </div>
                                    <div className='col-lg-6'>
                                        <input type="text" className='form-control bg-ligth mb-3' placeholder='Your Email* :' />
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className='col-lg-12'>
                                        <textarea name='' id='' className='form-control bg-ligth' placeholder='Your Message* :' cols={30} rows={10}></textarea>
                                    </div>
                                </div>
                                <button className='btn3 my-4'>Send message</button>
                        </form>
                    </div>
                </div>
        </section>
    )
}

export default Contact;