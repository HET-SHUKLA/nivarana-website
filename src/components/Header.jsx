
import logoImage from '../assets/nivaranatech-logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logoImage} alt="Nivarana Tech Logo" className="logo-img" />
        <div className="navbar-brand">
          <div className="brand-top">Nivarana</div>
          <div className="brand-bottom">Tech</div>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="#about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
