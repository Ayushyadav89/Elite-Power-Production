import React from 'react';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';

const View = () => {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='view'>
            <div className='content'>
                <div className='title'>
                    <h1>LET 's</h1>
                    <h1>GET</h1>
                    <h1>MOVING</h1>
                </div>
                <div className='sub-title'>
                    <p>Let's Get Building Your Innovation Starts Here</p>
                    <p>Unleash Your Potential</p>
                </div>
                <div className='buttons'>
                    <button onClick={handleContactClick}>Contact Us</button>
                </div>
            </div>
        </section>
    )
}

export default View;