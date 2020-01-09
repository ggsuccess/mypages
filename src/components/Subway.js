import React from 'react';
import { Route, Link } from 'react-router-dom';
const Subway = () => {
  const style = {
    border: '2px solid #ccc',
    width: '60%'
  };
  return (
    <>
      <table className="tableContents" style={style}>
        <tr>
          <th style={{ backgroundColor: '#0404B4' }}>
            <Link to="/Subway/1">1</Link>
          </th>
          <th style={{ backgroundColor: '#04B404' }}>
            <Link to="/Subway/2">2</Link>
          </th>
          <th style={{ backgroundColor: '#FF8000' }}>3</th>
        </tr>
      </table>
      <Route path="/Subway/:LineNumber" />
    </>
  );
};

export default Subway;
