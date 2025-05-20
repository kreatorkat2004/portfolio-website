import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faBriefcase, 
  faProjectDiagram, 
  faEnvelope,
  faBars,
  faX
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import LogoImg from '../../assets/images/E.png';

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <nav>
        <ul className="nav-list">
          <li className="logo">
            <img src={LogoImg} alt="Logo" className="logo-icon" />
          </li>
          <li className="menu-icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </li>
          <li className="nav-items">
            <NavLink exact="true" activeclassname="active" to="/" className="nav-item">
              <FontAwesomeIcon icon={faHome} className="nav-icon" />
              <span className="nav-text">Home</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about" className="nav-item">
              <FontAwesomeIcon icon={faUser} className="nav-icon" />
              <span className="nav-text">About Me</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/work" className="nav-item">
              <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
              <span className="nav-text">Work Experiences</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/portfolio" className="nav-item">
              <FontAwesomeIcon icon={faProjectDiagram} className="nav-icon" />
              <span className="nav-text">Projects</span>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact" className="nav-item">
              <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
              <span className="nav-text">Contact Me</span>
            </NavLink>
          </li>
          <li className="social-links">
            <a href="https://www.linkedin.com/in/xianxi04" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://www.github.com/kreatorkat2004" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
            <a href="https://www.instagram.com/pandachessaaron/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://www.chess.com/member/kreatorkat123" target="_blank" rel="noreferrer" aria-label="Chess.com">
              <img src="/images/navbar_images/chess.png" alt="Chess.com" className="social-icon" />
            </a>
          </li>
        </ul>
      </nav>
      
      <div className={`full-screen-menu ${showMenu ? 'active' : ''}`}>
        <button className="close-menu" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <nav className="full-screen-nav">
          <NavLink exact="true" activeclassname="active" to="/" className="full-screen-nav-item" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faHome} />
            <span className="nav-text">Home</span>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/about" className="full-screen-nav-item" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faUser} />
            <span className="nav-text">About Me</span>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/work" className="full-screen-nav-item" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBriefcase} />
            <span className="nav-text">Work Experiences</span>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/portfolio" className="full-screen-nav-item" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faProjectDiagram} />
            <span className="nav-text">Projects</span>
          </NavLink>
          <NavLink exact="true" activeclassname="active" to="/contact" className="full-screen-nav-item" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="nav-text">Contact Me</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;