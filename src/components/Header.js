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
        <NavLink activeStyle={style} to="/SignUp">
          회원가입
        </NavLink>
      </nav>
      <div className="login">
        {/*로그인안된상태=>로그인버튼 
        로그인된상태=>{}님 안녕하세용및 로그아웃버튼*/}
      </div>
    </>
  );
};

export default Header;
