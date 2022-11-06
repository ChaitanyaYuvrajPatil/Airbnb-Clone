import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Avatar } from '@mui/material';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
         <img 
             className="header__icon"
             src="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg"
             alt=""
          />
      </Link>

      <div className='header__center'>
          <input type="text"/>
          <SearchIcon/>
      </div>

      <div className='header__right'>
          <LanguageIcon/>
          <ExpandMoreIcon/>
          <Avatar/>
      </div>
    </div>
  )
}

export default Header
