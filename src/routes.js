/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import ContentPage from './components/ContentPage';
import ContactPage from './components/ContactPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/HomePage';
import TrendingVenue from './components/TrendingVenue';
import TestVenue from './components/TestVenue';
import VenueProfile from './components/VenueProfile';
import ModalListItem from './components/ModalListItem';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });
  //

  on('/contact', async () => <ContactPage />);

  on('/', async () => <HomePage />);

  on('/testvenue/', async () => <TestVenue />);

  on('/ModalListItem', async () => <ModalListItem />);

  on('/login', async () => <LoginPage />);

  // on('/venue/:id', async (state) => <VenueProfile /> );      

    on('/venue/:id', async (state) => {
      const content = await http.get(`http://104.131.179.151:3001/api/Votes/getplacevotesbycategory?id=${state.params.id}`);
      return content && <VenueProfile content={content} />;
  }); 
  //

  on('/register', async () => <RegisterPage />);

    on('/trending', async () => <TrendingVenue />);

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    return content && <ContentPage {...content} />;
  });
  //

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
