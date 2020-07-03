import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const style = {
    border: '2px solid black',
    width: '60%',
    padding: '5px',
  };
  return (
    <div className="HomeTitle">
      <div align="center">보고싶은 부분을 골라요</div>
      <table style={style} align="center">
        <tr>
          <th>
            <Link to="/Subway" style={{}}>
              지하철
            </Link>
          </th>
          <th>
            <Link to="/Soccer">축구</Link>
          </th>
        </tr>
      </table>
    </div>
  );
};
export default Home;
