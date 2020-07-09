import React from 'react';
import './LineData.css';

const LineData = ({ num, name, transfer, transferLine }) => {
  return (
    <>
      <table className="data-table" align="center">
        <tr>
          <th>역번호</th>
          <th>역명</th>
          <th>환승여부</th>
          <th>환승노선</th>
        </tr>
        <tr>
          <td>{num}</td>
          <td>{name}</td>
          <td>{transfer ? '가능' : '불가능'}</td>
          <td>{transferLine}</td>
        </tr>
      </table>
    </>
  );
};

export default LineData;
