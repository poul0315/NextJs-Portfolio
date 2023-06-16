import React from "react";
import Image from "next/image";

function Hero() {
    return (
        <div className="hero">
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
                Welcome to My Website!
            </h3>
            <p className="hero-text">
                {`Greetings! I'm an electrical engineering major with a passion for web development, 
                particularly in the full-stack realm. Alongside my love for crafting immersive digital experiences, 
                I am captivated by the transformative potential of AI and blockchain technologies. 
                When I'm not immersed in coding, you'll often find me indulging in my love for gaming. 
                Let's connect and embark on a journey of innovation and creativity together!`}
            </p>
        </div>
    )
}

export default Hero;