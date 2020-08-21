import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarSub.css';

const SidebarSub = ({ depth1Path, navInfo }) => {
  return (
    <ul className="depth2">
      {navInfo.map((depth2) => {
        const depth2Path = depth2.path;
        const depth2Pagename = depth2.pagename;

        return (
          <li key={depth2Path}>
            <NavLink
              activeClassName="active"
              to={depth1Path + depth2Path}
              exact
            >
              {depth2Pagename}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarSub;
