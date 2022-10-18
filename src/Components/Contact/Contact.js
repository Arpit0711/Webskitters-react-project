import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__containerEmailPhone">
          <h1 className="contact__containerPhone">
            Phone: <span> 9797729272</span>
          </h1>
          <h1>
            Email:
            <span className="contact__containerEmailSpan">xyz@games.com</span>
          </h1>
        </div>

        <div className="contact__form">
          <form>
            <div>
              <label className="contactformLabel">
                Name:
                <br />
                <input className="contact__formName" type="text" name="name" />
              </label>

              <label className="contactformLabel">
                email:
                <br />
                <input
                  className="contact__formEmail"
                  type="email"
                  name="email"
                />
              </label>
              <label className="contactformLabel">
                Phone:
                <br />
                <input type="tel" name="phone" className="contact__formPhone" />
              </label>
            </div>
            <div className="contact__formPhoneMessage">
              <label className="contactformLabelMessage">
                Message:
                <br />
                <input
                  className="contact__formPhoneMessage"
                  type="text"
                  name="message"
                />
              </label>
            </div>

            <button
              type="submit"
              className="contact__formbutton"
              value="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
