import React, { useEffect, useState, useRef } from 'react';
import './Header.css';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";

const Header = () => {
    const [activeSection, setActiveSection] = useState('');
    const observerRef = useRef(null);

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observerRef.current.observe(section));

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    return (
        <header className="header">
            <h1 className='name'>Giovani Ohira</h1>
            <h2>Software Engineer</h2>
            <p className='personal-desc'>Backend developer specialized in scalable APIs and efficient database management for seamless performance</p>
            <div className="section-links">
                <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleScroll(e, '#about')} aria-label="About">
                    <div className="link">
                        <hr />
                        ABOUT
                    </div>
                </a>
                <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => handleScroll(e, '#experience')} aria-label="Experience">
                    <div className="link">
                        <hr />
                        EXPERIENCE
                    </div>
                </a>
                <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => handleScroll(e, '#projects')} aria-label="Projects">
                    <div className="link">
                        <hr />
                        PROJECTS
                    </div>
                </a>
            </div>
            <div className="social-links">
                <a href="https://github.com/giovaniohira" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ size: '2.5em', color: '#cfcfcf' }}>
                        <FaGithub />
                    </IconContext.Provider>
                </a>
                <a href="https://www.linkedin.com/in/giovaniohira/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <IconContext.Provider value={{ size: '2.5em', color: '#cfcfcf' }}>
                        <FaLinkedinIn />
                    </IconContext.Provider>
                </a>
            </div>   
        </header>
    );
};

export default Header;
