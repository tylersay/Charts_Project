import React from 'react';
import {Link } from "react-router-dom"

import { Wrapper, Content } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <Home alt='Home' />
        </ Link>
      <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
    </Content>
  </Wrapper>
);

export default Header;
