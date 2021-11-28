import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/admin' className='social-logo'>
              All Round Fitness  <i class="fas fa-dumbbell"/>
            </Link>
          </div>
          <small class='website-rights'>ALR © 2021</small>
          <div class='social-icons'>
            <a class='social-icon-link facebook'  href="https://www.facebook.com/" target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </a>
            <a  class='social-icon-link instagram'  href="https://www.instagram.com/" target='_blank' aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </a>
            <a class='social-icon-link youtube' href="https://www.youtube.com/" target='_blank' aria-label='Youtube'>
              <i class='fab fa-youtube' />
            </a>
            <a class='social-icon-link twitter' href="https://www.twitter.com/" target='_blank' aria-label='Twitter'>
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;