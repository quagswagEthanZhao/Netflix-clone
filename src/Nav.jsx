import React, { useState, useEffect } from 'react';
import Logo from './logo_net.png';
import Navpic from './navpic.png';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      },
      []
    );
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img src={Logo} alt="Logo" className="nav_logo" />

      <img src={Navpic} alt="Logo" className="nav_avatar" />
    </div>
  );
};

export default Nav;
