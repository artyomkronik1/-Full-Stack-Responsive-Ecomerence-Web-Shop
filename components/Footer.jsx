import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { FaBeer,FaFacebook } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 ARTIOM KRONIK All rights reserverd</p>
      <p className="icons">
      <a href="https://www.instagram.com/artiom_kronik/">
        <AiFillInstagram />
      </a>


        <a href="https://www.facebook.com/artem.kronik/">
        <FaFacebook />
        </a>
      </p>
    </div>
  )
}

export default Footer
