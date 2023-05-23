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
            link: "http://www.github.com"
        },
        { 
            name: "Youtube", 
            icon: <FiYoutube />, 
            link: "http://www.youtube.com"
        },
        { 
            name: "Instagram", 
            icon: <FiInstagram />, 
            link: "http://www.instagram.com"
        },
        { 
            name: "Linkedin", 
            icon: <FiLinkedin />, 
            link: "http://www.linkedin.com"
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