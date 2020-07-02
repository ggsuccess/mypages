import React from 'react';
import { Route, Link } from 'react-router-dom';

const Subway = () => {
  const style = {
    border: '2px solid black',
    width: '60%',
  };
  const white = {
    color: 'white',
  };
  return (
    <>
      <table className="tableContents" style={style} align="center">
        <tr>
          <th style={{ backgroundColor: '#0404B4' }}>
            <Link to="/Subway/1" style={white}>
              1
            </Link>
          </th>
          <th style={{ backgroundColor: '#04B404' }}>
            <Link to="/Subway/2" style={white}>
              2
            </Link>
          </th>
          <th style={{ backgroundColor: '#FF8000' }}>
            <Link to="/Subway/3" style={white}>
              3
            </Link>
          </th>
        </tr>
        <tr>
          <th style={{ backgroundColor: '#ff0000' }}>
            <Link to="/Subway/4" style={white}></Link>
          </th>
          <th>
            <Link></Link>
          </th>
        </tr>
      </table>
      <Route path="/Subway/:LineNumber" />
    </>
  );
};

export default Subway;
