import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import SidebarItem from './components/common/SidebarItem';
import Contents from './components/route/Contents';
import NotFound from './components/route/NotFound';
import TabContents from './components/route/TabContents';
// import DoubleTabContents from './components/route/DoubleTabContents';
import { sitemap } from './api/Sitemap.json';
import './App.css';

function App() {
  const navInfo = sitemap;

  return (
    <div className="App">
      <div className="container">
        <Sidebar>
          <SidebarItem></SidebarItem>
        </Sidebar>
        <section className="section">
          <Switch>
            <Route
              path="/"
              render={({ match, history }) => (
                <Contents navInfo={navInfo} match={match} history={history} />
              )}
              exact
            />
            <Route
              path="/intro"
              render={({ match, history }) => (
                <Contents navInfo={navInfo} match={match} history={history} />
              )}
            />
            <Route
              path="/profiles"
              render={({ match, history }) => (
                <Contents navInfo={navInfo} match={match} history={history} />
              )}
            />
            <Route
              path="/series"
              render={({ match, history }) => (
                <TabContents
                  navInfo={navInfo}
                  match={match}
                  history={history}
                />
              )}
            />
            {/* <Route
              path="/series"
              render={({ match, history }) => (
                <DoubleTabContents
                  navInfo={navInfo}
                  match={match}
                  history={history}
                />
              )}
            /> */}
            <Route
              render={({ location }) => <NotFound location={location} />}
            />
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default App;
