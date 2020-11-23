import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { SideBar, Home, AboutMe, Resume, ContactMe, NotFound } from './sections';

export const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <SideBar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/contact-me">
            <ContactMe />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
