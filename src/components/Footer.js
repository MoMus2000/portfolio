import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Footer() {
  return (
  	<div className = "footer-container">
  	<section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Contact me @
            </Link>
          </div>
          <small class='website-rights'>Mustafa © 2020</small>
          <div class='social-icons'>
            <a href = 'mailto:muhammadmustafa4000@gmail.com'
              class='social-icon-link email'
              aria-label='Facebook'
            >
              <i class='fas fa-envelope' />
            </a>
            <a href = 'https://www.github.com/momus2000'
              class='social-icon-link github'
              aria-label='Twitter'
            >
              <i class='fab fa-github' />
            </a>
            <a
              href = 'https://www.linkedin.com/in/mustafa0001/'	
              class='social-icon-link linkedin'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
  	</div>
  	);
}

export default Footer;