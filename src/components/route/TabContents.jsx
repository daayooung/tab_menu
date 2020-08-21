import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { series_data as series } from '../../api/SeriesData.json';
import './TabContents.css';

const TabContents = ({ match, history }) => {
  const [contents, setContents] = useState([
    '해리 포터와 마법사의 돌',
    '해리 포터와 비밀의 방',
    '해리 포터와 아즈카반의 죄수',
    '해리 포터와 불의 잔',
    '해리 포터와 불사조 기사단',
    '해리 포터와 혼혈왕자',
    '해리 포터와 죽음의 성물 1',
    '해리 포터와 죽음의 성물 2'
  ]);

  const onClickTab = (e) => {
    let currentPage = series.filter(
      (data) => e.currentTarget.pathname === data.url
    );
    setContents(currentPage.map((data) => data.contents));
  };

  return (
    <>
      <ul className="tab">
        {series.map((data) => (
          <li key={data.url}>
            <NavLink to={data.url} className="tab_title" onClick={onClickTab}>
              {data.pagename}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="tab_contents">
        {contents.map((data) => (
          <li key={data}>{data}</li>
        ))}
        {/* li 형태가 최초에만 유지됨 */}
      </ul>
    </>
  );
};

export default TabContents;
