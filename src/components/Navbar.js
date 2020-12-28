import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import {Button} from './Button';
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Welcome &nbsp;&nbsp;
            <i class='fas fa-code' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <a 
                href = 'https://drive.google.com/file/d/1QvAC54tdtm0Z4Y8qM4i58-rbRh8fPH2X/view?usp=sharing' download
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Resume
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Resume </Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;