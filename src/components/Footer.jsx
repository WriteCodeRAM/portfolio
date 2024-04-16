import github from '/src/images/github.png';
import linkedin from '/src/images/linkedin.png';
import mail from '/src/images/mail2.png';

function Footer() {
  const email = 'randalmichel@gmail.com';

  const mailtoLink = `mailto:${email}`;

  return (
    <footer>
      <p>get in touch?</p>
      <div className="socials-container">
        <a
          href="https://github.com/WriteCodeRAM"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <img
            src={github}
            alt="github logo by icons8"
            className="footer-img"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/randal-michel-6a57aa18b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <img
            src={linkedin}
            alt="linkedin logo by icons8"
            className="footer-img"
          />{' '}
        </a>
        <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
          <img src={mail} alt="gmail logo by icons8" className="footer-img" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
