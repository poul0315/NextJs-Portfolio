import Link from "next/link";
import React from "react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";


function Navbar() {
    const sectionLinks = [
        { name: "About", link: "/#about" },
        { name: "Experience", link: "/#experience" },
        { name: "Project", link: "/#project" },
        { name: "Contact", link: "/#contact" },
    ];

    return (
        <nav>
            <div className="wrapper">
                <div className="brand">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className="nav-items">
                    <ul className="nav-items-list">
                        {
                            sectionLinks.map(({name,link}) => (
                                <li key={name} className="nav-items-list-item">
                                    <Link href={link} className="nav-items-list-item-link">{name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="nav-items-button">
                        <Button text="Resume" link="http://localhost:3000/resume.pdf" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;