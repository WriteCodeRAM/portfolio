import React from 'react'
import github from '/src/images/github.png'
import linkedin from '/src/images/linkedin.png'
import mail from '/src/images/mail2.png'

function Footer() {
  return (
    <footer>
        <p>get in touch?</p>
        <div className="socials-container">
          <a href="https://github.com/WriteCodeRAM"> <img src={github} alt="github logo by icons8" className="footer-img"/> 
          </a> 
         <a href="https://www.linkedin.com/in/randal-michel-6a57aa18b/">  <img src={linkedin} alt="linkedin logo by icons8" className="footer-img" /> </a>
          <a href=""> <img src={mail} alt="gmail logo by icons8" className="footer-img" />
          </a> 
        </div>
    </footer>
  )
}

export default Footer