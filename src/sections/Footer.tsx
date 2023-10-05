import React, { useRef } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";

export default function Footer() {
    const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
        e.preventDefault();
        const PUBLIC_KEY: string = process.env.REACT_APP_PUBLIC_KEY as string;
        const TEMPLATE_ID: string = process.env.REACT_APP_TEMPLATE_ID as string;
        const SERVICE_ID: string = process.env.REACT_APP_SERVICE_ID as string;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY).then(
        (result) => {
            console.log(result.text);
        },
        (error) => {
            console.log(error.text);
        }
        );
        form.current!.reset();
        window.alert("Message has sent!");
    };
    return (
      <section id="contact">
        <div className="footer-title">
          <h5>Get In Touch</h5>
          <h2>Contact Me</h2>
        </div>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MailOutlineIcon className="contact__option-icon" />
              <h4>Email</h4>
              <h5>poul0315@gmail.com</h5>
              <a href="mailto:poul0315@gmail.com">send a message</a>
            </article>
            <article className="contact__option">
              <TelegramIcon className="contact__option-icon" />
              <h4>Telegram</h4>
              <a href="https://t.me/poul0315" target="_blank" rel="noreferrer">
                send a message
              </a>
            </article>
            <article className="contact__option">
              <LinkedInIcon className="contact__option-icon" />
              <h4>LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/paul-nam-27b815210/"
                target="_blank"
                rel="noreferrer"
              >
                connect on linkedin
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              rows={12}
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </section>
    )
}