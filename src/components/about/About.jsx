import React from 'react'
import "./about.css"

const About = () => {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://i.ibb.co/t45xrbm/20210811-212057.jpg"
                        alt=''
                        className='a-img'
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="a-desc">
                    I'm an experienced frontend developer with four years of experience in Web development.
                    Participation in the development, debugging, maintenance and development of new web projects of various levels of complexity.
                    Support, finalization and development of web projects.
                </p>
            </div>
        </div>
    )
}

export default About