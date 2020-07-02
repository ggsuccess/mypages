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
          <th style={{ backgroundColor: '#005daa' }}>
            <Link to="/Subway/1" style={white}>
              1
            </Link>
          </th>
          <th style={{ backgroundColor: '#00a44a' }}>
            <Link to="/Subway/2" style={white}>
              2
            </Link>
          </th>
          <th style={{ backgroundColor: '#f47d30' }}>
            <Link to="/Subway/3" style={white}>
              3
            </Link>
          </th>
        </tr>
        <tr>
          <th style={{ backgroundColor: '#289dd5' }}>
            <Link to="/Subway/4" style={white}>
              4
            </Link>
          </th>
          <th style={{ backgroundColor: '#936fb1' }}>
            <Link to="/Subway/5" style={white}>
              5
            </Link>
          </th>
          <th style={{ backgroundColor: '#c77539' }}>
            <Link to="/Subway/6" style={white}>
              6
            </Link>
          </th>
        </tr>
      </table>
      <Route path="/Subway/:LineNumber" />
    </>
  );
};

export default Subway;
