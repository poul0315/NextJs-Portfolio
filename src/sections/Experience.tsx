import React from "react";
import Image from "next/image";

function Experience() {
    return (
        <div className="experience" id="experience">
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
                I&apos;m an electrical engineer with expereince in web developing
                and embedded coding in C++. My current interest is learning new technology
                and expand my knowledge. As I'm an electrical engineer, also interested in 
                designing PCB and Microcontroller system.
            </p>
        </div>
    )
}

export default Experience;