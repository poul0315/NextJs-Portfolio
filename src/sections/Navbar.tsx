// import Link from "next/link";
import React, { useEffect } from "react";
import { Link } from 'react-scroll';
import Logo from "@/components/Logo";
import Button from "@/components/Button";

function Navbar() {
    useEffect(() => {
        const navbarToggle = document.querySelector("#navbar-toggle");
        const navbarMenu = document.querySelector("#navbar-menu");
        const navbarLinksContainer = navbarMenu?.querySelector(".navbar-links");
        let isNavbarExpanded = navbarToggle?.getAttribute("aria-expanded") === "true";

        const toggleNavbarVisibility = () => {
        isNavbarExpanded = !isNavbarExpanded;
        navbarToggle?.setAttribute("aria-expanded", isNavbarExpanded.toString());
        };

        navbarToggle?.addEventListener("click", toggleNavbarVisibility);

        navbarLinksContainer?.addEventListener("click", (e) => e.stopPropagation());
        navbarMenu?.addEventListener("click", toggleNavbarVisibility);
        return () => {
            navbarToggle?.removeEventListener('click', toggleNavbarVisibility); // Add null check using '?'
            navbarLinksContainer?.removeEventListener('click', (e) => e.stopPropagation()); // Add null check using '?'
            navbarMenu?.removeEventListener('click', toggleNavbarVisibility); // Add null check using '?'
        };
    }, []);


    const sectionLinks = [
        { name: "About", link: "about" },
        { name: "Experience", link: "experience" },
        { name: "Project", link: "project" },
        { name: "Contact", link: "contact" },
    ];

    return (
        // <nav>
        //     <div className="wrapper">
        //         {/* <div className="brand">
        //             <Link activeClass="active" to="logo" spy={true} smooth={true} offset={50} duration={500}>
        //                 <Logo />
        //             </Link>
        //         </div> */}
        //         <div className="nav-items">
        //             <ul className="nav-items-list">
        //                 {
        //                     sectionLinks.map(({ name, link }) => (
        //                         <li key={name} className="nav-items-list-item">
        //                             <Link 
        //                                 activeClass="active"
        //                                 to={link}
        //                                 spy={true}
        //                                 smooth={true}
        //                                 offset={-300}
        //                                 duration={700}
        //                                 className="nav-items-list-item-link"
        //                             >
        //                                 {name}
        //                             </Link>
        //                         </li>
        //                     ))
        //                 }
        //             </ul>
        //             <div className="nav-items-button">
        //                 <Button text="Resume" link="http://localhost:3000/resume.pdf" />
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        
        <header id="navbar">
            <nav className="navbar-container container">
                <a href="/" className="home-link">
                    {/* <div className="navbar-logo"></div> */}
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                        Website Name
                    </Link>
                </a>
                <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div id="navbar-menu" aria-labelledby="navbar-toggle">
                    <ul className="navbar-links">
                        {
                            sectionLinks.map(({ name, link }) => (
                                <li key={name} className="navbar-item">
                                    <Link 
                                        activeClass="active"
                                        to={link}
                                        spy={true}
                                        smooth={true}
                                        offset={-300}
                                        duration={700}
                                        className="navbar-link"
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))
                        // <li className="navbar-item"><a className="navbar-link" href="/about">About</a></li>
                        // <li className="navbar-item"><a className="navbar-link" href="/blog">Blog</a></li>
                        // <li className="navbar-item"><a className="navbar-link" href="/careers">Careers</a></li>
                        // <li className="navbar-item"><a className="navbar-link" href="/contact">Contact</a></li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;