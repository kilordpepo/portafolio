import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { SideBar } from './sections/SideBar/';
import { Home } from './sections/Home/';
import { AboutMe } from './sections/AboutMe/';
import { Resume } from './sections/Resume/';
import { ContactMe } from './sections/ContactMe/';
import { NotFound } from './sections/NotFound/';

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
            <Redirect to="/Home" />
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