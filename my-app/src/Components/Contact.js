import React, { useState } from "react";

import "./../StyleComponent/contact.css";
function Contact() {
  const [cust, setCust] = useState([]);
  const handleSubmit = function (e) {
    e.preventDefault();
    var data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    setCust([...cust, data]);
    console.log("data", data);
    cust.map((item) =>
      console.log(
        "Name = ",
        item.name,
        "\nEmail = ",
        item.email,
        "\n Phone number = ",
        item.phone,
        "\n Message = ",
        item.message
      )
    );
  };
  return (
    <div className="contact">
      <section id="contact">
        <h1 className="h-primary center">Contact Us</h1>
        <div id="contact-box">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                name="Name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email : </label>
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Enter your E-mail"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Phone Number : </label>
              <input
                type="phone"
                name="Phone"
                id="phone"
                placeholder="Enter your Phone no."
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Message : </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
