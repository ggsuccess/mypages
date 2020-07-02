import React from 'react';
import { Link, Route } from 'react-router-dom';

const Soccer = () => {
  const style = {
    textAlign: 'center',
  };
  return (
    <>
      <div className="football">
        <table className="footballLeague" style={style}>
          <tr>
            <td>
              <Link to="/Soccer/EPL">EPL</Link>
            </td>
            <td>
              <Link to="/Soccer/laliga">라리가</Link>
            </td>
            <td>
              <Link to="/Soccer/serieA">세리에</Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/Soccer/bundesliga">분데스리가</Link>
            </td>
            <td>
              <Link to="/Soccer/ligue1">리그앙</Link>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Soccer;
