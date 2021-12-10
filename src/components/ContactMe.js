import React from "react";
import '../styling/ContactMe.css'
import Footer from './Footer'

function ContactMe() {
  return (
      <div>
    <div className='container border'
    style={{marginTop: "50px",
    width:'50%',
    backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmnOtvW_zmy9H3hhS_yjgCMD3l_HIf3b0nQ&usqp=CAU')`,
    backgroundPosition: 'center',
    backgroundSize:'cover',
    marginBottom:"100px"
    
    }}
    
    >

     <h1 style={{paddingTop:"50px"}} >Connect with Me. </h1>
     <form className="row" style={{margin: "25px 85px 75px 100px"}}>
         <label>Name:</label>
         <input type="text" name="name" className="form-control"></input>

         <label>Email:</label>
         <input type="email" name="user_email" className="form-control"></input>

         <label>Message:</label>

         <textarea name='message' rows='4' className='form-control' style={{marginBottom:"30px"}}></textarea>
         <button type="submit" value='send' className="form-control btn btn-secondary"  >Submit</button>
     </form>

     
    
    </div>
    
    </div>
  );
}

export default ContactMe;
