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
      (series) => e.currentTarget.pathname === series.url
    );
    setContents(currentPage.map((series) => series.contents));
    console.log(contents);
  };

  return (
    <>
      <ul className="tab">
        {series.map((series) => (
          <li key={series.url}>
            <NavLink
              to={series.url}
              className="tab_title"
              activeClassName="active_tab"
              onClick={onClickTab}
            >
              {series.pagename}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="tab_contents">
        {contents.map((data) => (
          <li className="contents_list" key={data}>
            {data}
          </li>
        ))}
      </ul>
      {/* Q) 최초 contents외에 setContents로 바꾼 값에는 <li></li>가 적용되지 않고 있다.*/}
    </>
  );
};

export default TabContents;
