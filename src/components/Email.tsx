import React from 'react';
import Link from "next/link";


// every main functions need to be changed in component code
function Email() {
    return ( 
        <div className="email">
            <Link href="mailto:poul0315@gmail.com" className="email-link"> 
                poul0315@gmail.com
            </Link>
        </div>
    );
}

export default Email;