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
      </>
    );
  }
};

export default SubwayLine;
