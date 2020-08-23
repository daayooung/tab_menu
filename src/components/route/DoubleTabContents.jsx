import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { series } from '../../api/SeriesData.json';
import './DoubleTabContents.css';

const DoubleTabContents = ({ history }) => {
  let depth2Data = series.map((data) => data.depth2).flat();
  const [tab2, settab2] = useState();
  const [tab2Contents, settab2Contents] = useState();

  // console.log(series, depth2Data);
  const onClickDepth1 = (e) => {
    let currentTab1 = series.find(
      (series) => e.currentTarget.pathname === series.path
    ).depth2;
    settab2(currentTab1);
  };

  const onClickDepth2 = (e) => {
    // console.log(e.currentTarget.pathname);
    // console.log(depth2Data.map((data) => data.path));
    let currentTab2 = depth2Data.filter(
      (data) => e.currentTarget.pathname === data.path
    );
    console.log(currentTab2);
    settab2Contents(currentTab2);
  };

  // console.log(tab2Contents);

  return (
    <div className="tab">
      <ul className="tab1">
        {series.map((series) => (
          <li className="tab_depth1" key={series.path}>
            <NavLink
              to={series.path}
              className="depth1_link"
              activeClassName="active_depth1"
              onClick={onClickDepth1}
            >
              {series.pagename}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="tab2">
        {tab2 &&
          tab2.map((depth2, i) => (
            <li key={depth2 + i} className="tab_depth2">
              <NavLink
                to={depth2.path}
                className="depth2_link"
                activeClassName="active_depth2"
                onClick={onClickDepth2}
              >
                {depth2.pagename}
              </NavLink>
            </li>
          ))}
      </ul>
      {tab2Contents &&
        tab2Contents.map((data) => (
          <p key={data.contents} className="tab_contents">
            {data.contents}
          </p>
        ))}
    </div>
  );
};

export default DoubleTabContents;
