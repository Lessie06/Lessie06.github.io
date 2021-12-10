import React from "react";
import "../styling/ContactMe.css";
import emailjs from 'emailjs-com';
import NavBar from "./NavBar";

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
      <div>
      <NavBar />
    <div className="top-container">
    
      <div
        className="container border"
        style={{
        margin: "auto",
        display: "block",
          border:"solid #ad5ead",
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
          <label style={{textAlign:"center"}}>Name:</label>
          <br></br>
          <input type="text" name="name" className="form-control"></input>
          <br></br>

          <label>Email:</label>
          <br></br>
          <input
            type="text"
            name="user_email"
            className="form-control"
          ></input>
          <br></br>

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
    </div>
  );
}

export default ContactMe;
