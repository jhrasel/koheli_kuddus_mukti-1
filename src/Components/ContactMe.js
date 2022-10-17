import React, { useState } from "react";
import {
    AiFillFacebook,
    AiFillLinkedin,
    AiOutlineMail,
    AiOutlineTwitter,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { ImMobile } from "react-icons/im";

export default function ContactMe() {
    const [mail, setMail] = useState({ name: "", email: "", message: "" });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(mail);
    }

    function handleChange(e) {
        setMail({
            ...mail,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <section id="contactMe">
            <div className="section_heading_container">
                <h2 className="section_title">Contact Me</h2>
                <p className="section_description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                </p>
            </div>

            <div className="section_content">
                {/* FORM */}
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="নাম"
                        name="name"
                        value={mail.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder="ইমেল"
                        name="email"
                        value={mail.email}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="মেসেজ লিখুন"
                        name="message"
                        value={mail.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" className="btn">
                        পাঠিয়ে দিন
                    </button>
                </form>

                {/* CONTACT ADDRESS */}
                <div className="contacts_area">
                    <div className="contact_options">
                        <div className="contact">
                            <GoLocation />
                            <span>
                                1458/14, Rod- 44 45 Haji Dil Mohammad Ave, Dhaka
                            </span>
                        </div>
                        <div className="contact">
                            <ImMobile />
                            <span>(843) 555-0130 (P.S)</span>
                        </div>
                        <div className="contact">
                            <AiOutlineMail />
                            <span>willie.jennings@example.com (P.S)</span>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="map_wrapper">
                        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                        <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=natore&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    </div>

                    {/* Social Media Links */}
                    <div className="social_links">
                        <a href="/">
                            <AiOutlineTwitter />
                        </a>
                        <a href="/">
                            <AiFillFacebook />
                        </a>
                        <a href="/">
                            <AiFillLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
