import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const style = {
    border: '2px solid black',
    width: '60%',
  };
  return (
    <div className="HomeTitle">
      <div>보고싶은 부분을 골라요</div>
      <table style={style}>
        <tr>
          <td>
            <Link to="/Subway" style={{}}>
              지하철
            </Link>
          </td>
          <td>
            <Link to="/Soccer">축구</Link>
          </td>
        </tr>
      </table>
    </div>
  );
};
export default Home;
