import React from 'react';
import { Route, Link } from 'react-router-dom';
import SubwayLine from './SubwayLine';

const Subway = () => {
  const style = {
    border: '2px solid black',
    width: '60%',
    padding: '3px',
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
              1호선
            </Link>
          </th>
          <th style={{ backgroundColor: '#00a44a' }}>
            <Link to="/Subway/2" style={white}>
              2호선
            </Link>
          </th>
          <th style={{ backgroundColor: '#f47d30' }}>
            <Link to="/Subway/3" style={white}>
              3호선
            </Link>
          </th>
        </tr>
        <tr>
          <th style={{ backgroundColor: '#289dd5' }}>
            <Link to="/Subway/4" style={white}>
              4호선
            </Link>
          </th>
          <th style={{ backgroundColor: '#936fb1' }}>
            <Link to="/Subway/5" style={white}>
              5호선
            </Link>
          </th>
          <th style={{ backgroundColor: '#c77539' }}>
            <Link to="/Subway/6" style={white}>
              6호선
            </Link>
          </th>
        </tr>
        <tr>
          <th style={{ backgroundColor: '#677718' }}>
            <Link to="/Subway/7" style={white}>
              7호선
            </Link>
          </th>
          <th style={{ backgroundColor: '#f15b66' }}>
            <Link to="/Subway/8" style={white}>
              8호선
            </Link>
          </th>
          <th style={{ backgroundColor: '#c6b182' }}>
            <Link to="/Subway/9" style={white}>
              9호선
            </Link>
          </th>
        </tr>
      </table>
      <Route path="/Subway/:LineNumber" component={SubwayLine} />
    </>
  );
};

export default Subway;
