import React from "react";
import Image from "next/image";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-group">
                <Image 
                    // priority
                    src="/profile-picture.png" 
                    className="hero-group-profile-image"
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 220px"
                    width={220}
                    height={220}
                    alt="picture of Paul"
                />
                <div className="hero-group-name">
                    <h1 className="hero-group-name-title">
                        Hello My Name Is
                    </h1>
                    <h2 className="hero-group-name-title-large">
                        Paul Nam
                    </h2>
                </div>
            </div>
            <h3 className="hero-title-large hero-title-sub">
                Welcome to My Website!
            </h3>
            <p className="hero-text">
                {
                    `I'm a professional electrical engineer with a passion for web development, 
                    particularly in the full-stack realm. Alongside my love for crafting immersive digital experiences, 
                    I am captivated by the transformative potential of AI and blockchain technologies. 
                    When I'm not immersed in coding, you'll often find me indulging in my love for gaming. 
                    Let's connect and embark on a journey of innovation and creativity together!`   
                }
            </p>
        </div>
    )
}

export default Hero;