import React from 'react'
import '../styling/HomePage.css'

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="bottom-container">
            <a className="footer-link" href="https://www.instagram.com/lessie07/">
              Instagram
            </a>
            <a className="footer-link" href="https://github.com/Lessie06/">
              GitHub
            </a>
            <a className="footer-link" href="www.linkedin.com/in/lessie-quezada">
              Linkedin
            </a>
            <p className="copyright">© 2021 Lessie Quezada.</p>
          </div>
            </div>
        )
    }
}

export default Footer;