import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { series_map as seriesMap } from '../../api/SeriesMap.json';
import { series_data as seriesData } from '../../api/SeriesData.json';
import './DoubleTabContents.css';

const DoubleTabContents = ({ history }) => {
  console.log(seriesData);
  console.log(seriesMap);
  return (
    <>
      <ul className="tab">
        <li>
          <NavLink to={'/series'}></NavLink>
        </li>
      </ul>
      <ul className="tab_contents">
        <li className="contents_list"></li>
      </ul>
    </>
  );
};

export default DoubleTabContents;
