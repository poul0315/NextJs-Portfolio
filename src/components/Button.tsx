import React from 'react';
import Link from "next/link";


// every main functions need to be changed in component code
function Button({ text, link }:{ text: string; link: string }) {
    return ( 
        <nav className="btn-container">
            <Link href={link} className="btn" target="_blank"> 
                {text}
            </Link>
        </nav>
    )
}

export default Button;