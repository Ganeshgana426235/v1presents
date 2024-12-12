import React from 'react';
import './Footer.css';
import insta from '../../Media/insta.png'
import youtube from '../../Media/youtube.svg'
import { Link as RouterLink} from 'react-router-dom';

const Footer = () => {
  return (
<div>
<br></br>
    <div className='footer'>
      <ul className='listitems'>
      <li>
            <RouterLink to="/" className='lis'>
            Home</RouterLink>
          </li>
        <li>
            <RouterLink to="/team" className='lis'>
              About Us
            </RouterLink>
          </li>
        
      </ul>

      <ul className='listmedia'>
      <li><a href="https://www.instagram.com/v1_presents?utm_source=qr&igsh=ZXh0NzEwMTh6ZWx4"><img src={insta} ></img></a></li>
      <li> <a href="https://www.youtube.com/@V1_presents"> <img src={youtube} ></img></a></li>
      </ul>

      </div>
      <hr></hr>
      <p className='copyright'> © V1 Presents. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
