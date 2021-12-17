import React from 'react'
import {FaGraduationCap} from "react-icons/fa"
import {BiBriefcaseAlt2} from "react-icons/bi"
import {BsCalendarDate} from "react-icons/bs"

const Qualifiction = () => {
    return (
    
       <section className='qualification section containerpy-5 py-5' id='workExperience'>
           <h2 className='section_title'> Work Experience </h2>
           <span className='section_subtitle'>My personal journey</span>

           <div className='qualification_container'>
                <div className='qualification_tabs'>
                    <div className='qualification_button button--flex '>
                        <FaGraduationCap/>
                        <span className='lef'></span>
                        Education
                    </div>

                      <div className='qualification_button button--flex'>
                        <BiBriefcaseAlt2/>
                        <span className='lef'></span>
                        Work.
                    </div>
                </div>

                {/* QUALIFICATION CONTENT 1 */}

                <div className='qualification_sections'>
                    <div className='qualification_content qualification_active data-content'>
                    
                        <div className='qualification_data'>
                            <div className='education'>
                                <h3 className='qualification_title' >Olympiad in Informatics</h3>
                                <span className='qalification_subtitle'> Bilimkana Lyceum</span>
                                <div className='qualification_calendar'>
                                    <BsCalendarDate />
                                    <span className='lef'></span>
                                    2014-2018
                                </div>
                            </div>
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                {/* QUALIFICATION CONTENT 2 */}
                        <div className='qualification_data'>
                            <div></div>
                             <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                            <div>
                                <h3 className='qualification_title'>Web developer</h3>
                                <span className='qalification_subtitle'>Bishkek</span>
                                <div className='qualification_calendar'>
                                    <BsCalendarDate />
                                    <span className='lef'></span>
                                    2021-2022
                                </div>
                            </div>
                           
                        </div>



                    </div>

                    <div className='qualification_content data-content'>
                        <div className='qualification_data'>
                            <div className='education'>
                                <h3 className='qualification_title'>Computer science</h3>
                                <span className='qalification_subtitle'>Kyrgyz-Turkish Manas University</span>
                                <div className='qualification_calendar'>
                                    <BsCalendarDate />
                                    <span className='lef'></span>

                                    2018-2023
                                </div>
                            </div>
                            <div>
                                <span className='qualification_rounder'></span>
                                <span className='qualification_line'></span>
                            </div>
                        </div>

                    </div>
                </div>
           </div>

       </section>
       
    )
}

export default Qualifiction
