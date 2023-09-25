import React from "react";
import Link from "next/link";
import {
    FiGithub,
    FiYoutube,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
} from "react-icons/fi";

function SocialIcons() {
    const socialLinks = [
        { 
            name: "Github", 
            icon: <FiGithub />, 
            link: "http://www.github.com/poul0315"
        },
        { 
            name: "Youtube", 
            icon: <FiYoutube />, 
            link: "https://www.youtube.com/@namu7546/featured"
        },
        { 
            name: "Instagram", 
            icon: <FiInstagram />, 
            link: "https://www.instagram.com/paul_nam1/"
        },
        { 
            name: "Linkedin", 
            icon: <FiLinkedin />, 
            link: "https://www.linkedin.com/in/paul-nam-27b815210/"
        },
        { 
            name: "Twitter", 
            icon: <FiTwitter />, 
            link: "http://www.twitter.com"
        },
    ];

  return (
    <div className="social-icons">
        <ul className="social-icons-list">
            {
                socialLinks.map(({name, icon, link}) => (
                    <li key={name} title={name} className="social-icons-list-item">
                        <Link href={link} className="social-icons-list-item-link" target="_blank">
                            {icon}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  );
}

export default SocialIcons;