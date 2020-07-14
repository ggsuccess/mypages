import React from 'react';
import './LineData.css';

const LineData = ({ num, name, transfer, transferLine }) => {
  return (
    <>
      <table className="data-table" align="center">
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
