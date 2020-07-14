import React, { useState, useEffect } from 'react';
import LineData from './LineData';

const SubwayLine = ({ match }) => {
  const num = match.params.LineNumber;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/Subway/${num}`)
      .then((res) => res.json())
      .then((res) => setData(data.concat(res)))
      .catch((err) => console.error('errmsg:' + err));
  }, []);
  if (data.length === 0) {
    return (
      <>
        <p style={{ fontSize: '30px', textAlign: 'center' }}>loading........</p>
      </>
    );
  } else if (data) {
    //console.log(data);
    return (
      <>
        <table>
          <tr>
            <th>역번호</th>
            <th>역명</th>
            <th>환승여부</th>
            <th>환승노선</th>
          </tr>
          <tr>
            <div>
              {data.map((item) => (
                <LineData
                  key={item.stationNo}
                  num={item.stationNo}
                  name={item.stationName}
                  transfer={item.transfer}
                  transferLine={item.transferLine}
                />
              ))}
            </div>
            {/* {data.map((item) => (
              <>
                <td>{item.stationNo}</td>
                <td>{item.stationName}</td>
                <td>{item.transfer ? '가능' : '불가능'}</td>
                <td>{item.transferLine}</td>
              </>
            ))} */}
          </tr>
        </table>
      </>
    );
  }
};

export default SubwayLine;
