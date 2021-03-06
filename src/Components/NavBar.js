import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

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
          All Round Fitness<i class="fas fa-dumbbell" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/forum' className='nav-links' onClick={closeMobileMenu}>
              <i class="fab fa-forumbee" /> Forum 
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/workoutplans' className='nav-links' onClick={closeMobileMenu}>
              <i class="fas fa-running"/> Workout Plans
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/dietplans' className='nav-links'onClick={closeMobileMenu} >
              <i class="fas fa-utensils"/> Diet Plans
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/aboutus' className='nav-links'onClick={closeMobileMenu} >
              <i class="fas fa-info-circle"/> About Us
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Login</Button>}
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;