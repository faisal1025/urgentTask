import React from 'react'
import { FaPlus } from "react-icons/fa";
import { MdArrowBack, MdCalendarMonth, MdCallMade, MdDownload, MdShare } from "react-icons/md";
import bgImage from './img5.jpg'
const overviewData = [
    {
        data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        data: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
]

const mainFeatureData = [
    {
        heading: 'CAPA Corrective Action Preventive Action',
        points: [
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
        ]
    },
    {
        heading: 'CAPA Corrective Action Preventive Action',
        points: [
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
        ]
    },
    {
        heading: 'CAPA Corrective Action Preventive Action',
        points: [
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
            {
                point: 'Tools for managing corrective and preventive actions (CAPA)'
            },
        ]
    },
   
]

const hostData = [
    {
        name: 'Kiran Bhavaraju',
        role: 'Co-Founder',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        pic: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
    },
    {
        name: 'Kiran Bhavaraju',
        role: 'Co-Founder',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        pic: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
    },
    {
        name: 'Kiran Bhavaraju',
        role: 'Co-Founder',
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
        pic: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
    },
]

const About = () => {
    return (
        <div>
            <div className='hero-section m-12 border'>
                <div className="hero-img" style={{background: `url(${bgImage}) bottom center no-repeat`, }}>
                    <div className='flex flex-col justify-between gap-1 text-white p-8' style={{height: '90%'}}>
                        <div>
                            <div className='flex gap-1 items-center'>
                                <span className='border-box'><MdArrowBack /></span>
                                <span>Events / Events details</span>
                            </div>
                            <div>
                                <h2 className='hero-img-heading'>Integrated Quality Management</h2>
                                <h4 className='hero-img-title'>with Microsoft Dynamics 365 Finance & and Supply Chain</h4>
                            </div>
                        </div>
                        <div>
                            <div className='pr-12'>
                                <div className='hero-img-title'>
                                    Thursday, April 25, 2024
                                    <div className='font-weight-500'>2:00 PM-3:00 PM EST</div>
                                    <div>Online - Microsoft Teams</div>
                                </div>
                            </div>
                            <div className='flex gap-1 items-center justify-between py-4'>
                                <div className='flex gap-1 items-center'>
                                    <span className='border-box'><MdCalendarMonth /></span>
                                    <span>Add to calendar</span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <span className='border-box'><MdDownload /></span>
                                    <span className='border-box'><MdShare /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="register-section">
                    <div className='flex gap-1 items-center'>
                        <div>
                            <h1 className='hero-heading'>
                                Register <br/> now
                            </h1>
                            <div className='text-subtitle'>
                                Complete this form to register
                            </div>
                        </div>
                        <h3 className='text-regsiter'>
                            Our weekly webinars welcome professionals from all industries.
                        </h3>
                    </div>
                    <form className='flex flex-col w-full py-8 gap-1'>
                        <input type="text" placeholder='First name*'  className='p-4 reg-input'/>
                        <input type="text" placeholder='Last name*'  className='p-4 reg-input'/>
                        <input type="text" placeholder='Company name*'  className='p-4 reg-input'/>
                        <input type="text" placeholder='Work email address*'  className='p-4 reg-input'/>
                        <input type="text" placeholder='Job title'  className='p-4 reg-input'/>
                        <button className='register-btn'>Register now</button>
                    </form>
                    <div className='form-text-helper'>
                        By clicking "Register now" you agree to our Terms and Privacy Policy
                    </div>
                </div>
            </div>

            <div className='count-down m-12'>
                <div className="timing-div">
                    Starts in
                </div>
                <div className="timing-div">
                    09 
                    <span className="sm-text">Days</span>
                </div>
                <div className="timing-div">
                    22
                    <span className="sm-text">Hrs</span>
                </div>
                <div className="timing-div">
                    37
                    <span className="sm-text">Mins</span>
                </div>
            </div>


            <div className='agenda m-12 py-8'>
                <h3 className='section-title'>Agenda</h3>
                <div style={{textAlign: 'center'}}>In only 45 minutes you will learn about Quality Management</div>
                <div className='agenda-lists'>
                    <div className='px-4 left-list'>
                        <ul className='gap-1 flex flex-col' style={{margin: '0'}}>
                            <li>Overview of iQM main features</li>
                            <li>Overview of iQM main features</li>
                            <li>Introduxtion to XcelPros and it's history with Dynamics 365 F&O</li>
                        </ul>
                    </div>
                    <div className='px-4'>
                        <ul className='gap-1 flex flex-col' style={{margin: '0'}}>
                            <li>Overview of iQM main features</li>
                            <li>Overview of iQM main features</li>
                            <li>Introduxtion to XcelPros and it's history with Dynamics 365 F&O</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='overview m-12 py-8'>
                <h3 className='section-title'>Overview</h3>
                <div className='px-8'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged.
                </div>
                <ul className='overview-list'>
                    {
                        overviewData && 
                            overviewData.map((item, ind) => {
                                return <li key={ind}>{item.data}</li>
                            })
                    }
                </ul>
            </div>

            <div className='m-12'>
                <h3 className='section-title'>Industries that can be benifit from this event</h3>
                <div className='flex justify-center items-center gap-1 py-4'>
                    <div className='benifits-div'>Manufacturing</div>
                    <div className='benifits-div'>Automotive</div>
                    <div className='benifits-div'>Aerospace</div>
                    <div className='benifits-div'>Pharmaceuticals</div>
                </div>
            </div>

            <div className='m-12 expectations py-4'>
                <h3 className='section-title'>What you can expect from webinar ?</h3>
                <div className='expectations-text'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>

            <div className='m-12 who'>
                <h3 className='section-title'>Who is it for?</h3>
                <ul className='who-list'>
                    <li>Manufacturing & Production Teams</li>
                    <li>Compliance Officers</li>
                    <li>Bussiness Leaders</li>
                    <li>Quality Control Inspector</li>
                </ul>
            </div>

            <div className='main-features m-12'>
                 <h3 className='section-title py-8'>Main Features of iQM over and above the fuctionality of D365 F&O</h3> 
                 <div className='flex flex-wrap justify-center items-center'>
                    {
                        mainFeatureData && 
                        mainFeatureData.map((features, ind) => {
                            return (
                                <div key={ind} className='p-8 features-item'>
                                    <h3 className='feature-heading'>{features.heading}</h3>
                                    <ul className='feature-lists'>
                                        {
                                            features.points.map((point, ind) => {
                                                return <li key={ind}>{point.point}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                 </div>
                 <div style={{fontSize: '18px', padding: '2rem 0rem', borderBottom: '1px dashed slategrey'}}>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                 </div>
            </div>

            <div className='hosts m-12'>
                <h3 className='section-title py-8'>Hosts</h3> 
                <div className='flex host-box justify-center items-center pb-16'>
                    {
                        hostData && 
                        hostData.map((host, ind) => {
                            return (
                                <div className='rounded-lg host-card'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h2 className='m-0 p-0 w-max'>{host.name}</h2>
                                            <h4 className='m-0 p-0'>{host.role}</h4>
                                        </div>
                                        <div className='text-center'>
                                            <img alt='pro pic' src={host.pic} className='pro-img' />
                                        </div>
                                    </div>
                                    <div>
                                        {host.desc}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div className='frequently-asked m-12'>
                <div className='frequent-title'>
                    Frequently asked questions
                </div>
                <ul className='frequent-list'>
                    <li>
                        How do I join webinar? <span><FaPlus /></span>
                    </li>
                    <li>
                        How can I ask during the webinar? <span><FaPlus /></span>
                    </li>
                    <li>
                        How can I learn more about Dynamics 365 Finance? <span><FaPlus /></span>
                    </li>
                    <li>
                        What platform will the webinar will held? <span><FaPlus /></span>
                    </li>
                </ul>
            </div>

            <div className='contact-us m-12'>
                <h3 className='join-us-header'>Join us at this free webinar</h3>
                <div className='pb-16'>Contact us today to learn more about how we can help your business acheive financial excellence with Microsoft Dynamics 365.</div>
                <button className='bg-white p-4 rounded-lg text-base'>
                    Subscribe <MdCallMade />
                </button>
            </div>
        </div>
    )
}

export default About
