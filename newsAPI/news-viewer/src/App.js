import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  //9fe3f07998f74b429d50e9a34d549e61
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
