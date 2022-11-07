import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { ImMobile } from "react-icons/im";
import serverURL from "../URL/serverURL";

export default function ContactMe({ targetForm }) {
  const [mail, setMail] = useState({ name: "", email: "", message: "" });
  const [appSettings, setAppSettings] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(serverURL + "api/apply-people", {
        name: mail.name,
        email: mail.email,
        msg: mail.message,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Success! Your message sent successfully...");
        } else {
          alert("Failed! Message didn't sent. Please try again later...");
        }
      });
  }

  function handleChange(e) {
    setMail({
      ...mail,
      [e.target.name]: e.target.value,
    });
  }

  async function fetchAppSettings() {
    try {
      const response = await axios.get(serverURL + "api/application-settings");
      setAppSettings(response.data.data);
    } catch (error) {
      //
    }
  }

  useEffect(() => {
    fetchAppSettings();
  }, [appSettings]);

  return (
    <section id="contactMe">
      <div className="section_heading_container">
        <h2 className="section_title">
          {appSettings.contact_title
            ? appSettings.contact_title
            : "যোগাযোগ করুন"}
        </h2>
        <p className="section_description">
          {appSettings?.contact_description}
        </p>
      </div>

      <div className="section_content">
        {/* FORM */}
        <form action="#" method="post" onSubmit={handleSubmit} ref={targetForm}>
          <h6>যোগাযোগ</h6>

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
              <span className="icon">
                <GoLocation />
              </span>
              <span className="text">
                {appSettings?.app_address
                  ? appSettings.app_address
                  : "Not Available"}
              </span>
            </div>
            <div className="contact">
              <span className="icon">
                <ImMobile />
              </span>
              <span className="text">
                {appSettings?.app_phone
                  ? appSettings.app_phone
                  : "Not Available"}
              </span>
            </div>
            <div className="contact">
              <span className="icon">
                <AiOutlineMail />
              </span>
              <span className="text">
                {appSettings?.app_email
                  ? appSettings.app_email
                  : "Not Available"}
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="map_wrapper">
            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
            <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=natore&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>

          {/* Social Media Links */}
          <div className="social_links">
            <a href={appSettings?.app_twitter} target="_blank" rel="noreferrer">
              <AiOutlineTwitter />
            </a>
            <a href={appSettings?.app_fb} target="_blank" rel="noreferrer">
              <AiFillFacebook />
            </a>
            <a href={appSettings?.app_linkdin} target="_blank" rel="noreferrer">
              <AiFillLinkedin />
            </a>
            <a
              href={appSettings?.app_instagram}
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a href={appSettings?.app_youtube} target="_blank" rel="noreferrer">
              <AiFillYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
