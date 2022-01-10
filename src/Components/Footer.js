import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  function handleClick(e) {
    e.preventDefault();
    const audio=new Audio("./sounds/sound2.mp3");
    audio.play();
  }
  function click(e) {
    e.preventDefault();
    const audio=new Audio("./sounds/sound3.mp3");
    audio.play();
  }
  function clicker(e) {
    e.preventDefault();
    const audio=new Audio("./sounds/sound4.mp3");
    audio.play();
  }
  function clic(e) {
    e.preventDefault();
    const audio=new Audio("./sounds/sound5.mp3");
    audio.play();
  }
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
            <a class='social-icon-link facebook'  href="" onClick={click} target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook-f' />
            </a>
            <a  class='social-icon-link instagram'  href="" onClick={clicker} target='_blank' aria-label='Instagram'>
              <i class='fab fa-instagram' />
            </a>
            <a class='social-icon-link youtube' href="" onClick={clic} target='_blank' aria-label='Youtube'>
              <i class='fab fa-youtube' />
            </a>
            <a class='social-icon-link twitter' href="" onClick={handleClick} target='_blank' aria-label='Twitter'>
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;