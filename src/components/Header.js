import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const style = { textDecoration: 'underline' };
  return (
    <>
      <nav className="navi">
        <NavLink activeStyle={style} to="/Subway">
          노선
        </NavLink>
        <NavLink activeStyle={style} to="/Soccer">
          축구
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
