import React from 'react';
import { NavLink } from 'react-router-dom';
import { data } from '../../api/Data.json';
import './TabContents.css';

const TabContents = ({ navInfo, match, history }) => {
  let currentPage = history.location.pathname;
  console.log(history);
  let initdata = data[3].depth2;
  let clickedTitle = initdata.filter((data) =>
    console.log(data.url, currentPage)
  );

  console.log(clickedTitle);

  return (
    <>
      <ul className="tab">
        {initdata.map((data) => (
          <li key={data.url + data.contents}>
            <NavLink to="/series" className="tab_title" key={initdata.url}>
              {data.url}
            </NavLink>{' '}
          </li>
        ))}
      </ul>

      <div className="tab_contents" key={data.contents}>
        {' '}
        {data.contents}
      </div>
    </>
  );
};

export default TabContents;
