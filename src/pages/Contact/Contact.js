import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_wrapper">
        <div className="titlePageContact">
          <h1>Contact</h1>
          <div className="bottom_border_contact" />
        </div>
        <div className="contact_highlight">
          Have a question or want to work together?
        </div>
        <form
          className="contact_form"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input placeholder="Name" type="text" name="name" required />
          <input placeholder="Enter email" type="email" name="email" required />
          <textarea
            placeholder="Your Message"
            type="text"
            name="message"
          ></textarea>
          <div data-netlify-recaptcha="true"></div>
          <input
            className="contact_button"
            type="submit"
            id="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
