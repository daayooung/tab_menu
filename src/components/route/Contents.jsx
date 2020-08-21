import React from 'react';
import { data } from '../../api/Data.json';

const Contents = ({ history }) => {
  let currentPage = history.location.pathname;
  const subNav = history.location.pathname.split('/')[2];

  let depth1Data = data.find((data) => data.url === currentPage);
  let depth2 = data
    .filter((data) => data.depth2.length > 0)
    .map((data) => data.depth2)
    .flat();
  let depth2Data = depth2.filter((data) => data.url === currentPage);

  console.log({ currentPage, depth2, depth2Data });

  let initData;
  if (!subNav) {
    initData = depth1Data;
  } else {
    initData = depth2Data;
  }

  return (
    <div>
      <p>{initData.contents}</p>
      {initData === depth2Data &&
        initData.map((data) => <p key={data.url}>{data.contents}</p>)}
    </div>
  );
};

export default Contents;