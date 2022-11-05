import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [appSettings, setAppSettings] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
  }
  console.log(appSettings);

  function handleChange(e) {
    setMail({
      ...mail,
      [e.target.name]: e.target.value,
    });
  }

  async function fetchAppSettings() {
    try {
      const response = await axios.get(
        "http://koheli.sscquizcontest.com/api/application-settings"
      );
      setAppSettings(response.data.data);
    } catch (error) {
      //
    }
  }

  useEffect(() => {
    fetchAppSettings();

    //   SET APP TITLE
    document.title = appSettings.app_name
      ? appSettings.app_name
      : "কোহেলী কুদ্দুস মুক্তি";
  }, [appSettings]);

  return (
    <section id="contactMe">
      <div className="section_heading_container">
        <h2 className="section_title">যোগাযোগ করুন</h2>
        <p className="section_description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </p>
      </div>

      <div className="section_content">
        {/* FORM */}
        <form action="#" method="post" onSubmit={handleSubmit}>
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
                {/* {appSettings.app_address} */}
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
