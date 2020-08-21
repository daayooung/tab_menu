import React from 'react';
import { withRouter } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import { sitemap } from '../../api/Sitemap.json';
import '../common/Sidebar.css';

const Sidebar = () => {
  return (
    <aside>
      <nav className="sidebar">
        <h1 className="logo">
          <img
            src={require('../../images/harry.png')}
            alt="해리포터 얼굴 로고"
          ></img>
        </h1>
        <ul>
          {sitemap.map((sitemap) => (
            <SidebarItem key={sitemap.path} navInfo={sitemap} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default withRouter(Sidebar);
