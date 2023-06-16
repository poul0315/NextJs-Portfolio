import React from "react";
import Image from "next/image";

function About() {
    return (
        <div className="about" id="about">
            <Image 
                src="/profile-picture.png" 
                className="hero-profile-image"
                width={200}
                height={200}
                alt="picture of Paul"
            />
            <h1 className="hero-title">
                Hi my name is
            </h1>
            <h2 className="hero-title-large">
                Paul Nam
            </h2>
            <h3 className="hero-title-large hero-title-sub">
                I love programming.
            </h3>
            <p className="hero-text">
                {`Will be added`}
            </p>
        </div>
    )
}

export default About;