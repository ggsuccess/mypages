import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="HomeTitle">
      <div>보고싶은 부분을 골라요</div>
      <Link>노선</Link>
      <Link>축구</Link>
    </div>
  );
};
export default Home;
