import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="HomeTitle">
      <div>보고싶은 부분을 골라요</div>
      <div>
        <Link to="/Subway" style={{}}>
          노선
        </Link>
        <Link to="/Soccer">축구</Link>  
      </div>
    </div>
  );
};
export default Home;
