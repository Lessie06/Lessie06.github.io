import React from "react";
import "../styling/ContactMe.css";
import emailjs from 'emailjs-com';

function ContactMe() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_32hg8qv",
      "template_6f9kzeo",
      e.target,
      "user_OMvHGilaovhjtP8zkC5dH"
    ).then(res=>{
        console.log(res)
    }).catch(err=> console.log(err));
  };
  return (
    <div className="top-container">
      <div
        className="container border"
        style={{
          marginTop: "50px",
          width: "50%",

          backgroundPosition: "center",
          backgroundSize: "cover",
          // marginBottom:"100px"
        }}
      >
        <h1 style={{ paddingTop: "50px", color: "black" }}>
          Connect with Me.{" "}
        </h1>
        <form
          className="row"
          style={{ margin: "25px 85px 75px 100px" }}
          onSubmit={sendEmail}
        >
          <label>Name:</label>
          <input type="text" name="name" className="form-control"></input>

          <label>Email:</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
          ></input>

          <label>Message:</label>

          <textarea
            name="message"
            rows="4"
            className="form-control"
            style={{ marginBottom: "30px" }}
          ></textarea>
          <button
            type="submit"
            value="send"
            className="form-control btn btn-secondary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
