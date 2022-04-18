import React from 'react'
import '../header/Header.css'
import firstLogo from '../../assets/image/ABC.png';
import secondLogo from '../../assets/image/logo2.png';
import Leftbutton from '../leftbutton/index.js'

const Header = () => {
  return (

    <div>
      <div className="table-wrapper">
        <div className="table-banner-wrapper">
          <div className="logo-wrapper">
            <img id="second-logo" src={firstLogo} alt="" />
          </div>
          <div className="logo-wrapper">
            <img id="second-logo" src={secondLogo} alt="" />
          </div>
          <div className="logo-wrapper"></div>
        </div>
      </div>
      <Leftbutton />
    </div>
    
  )
}

export default Header;