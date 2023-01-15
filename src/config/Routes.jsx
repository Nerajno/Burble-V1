import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../components/pages/Home';
import Catalog from '../components/pages/Catalog';
import Detail from '../components/pages/detail/Detail';
import NotFoundPage from '../components/pages/NotFoundPage';

const Routes = () => {
  return (
    <Switch>
      <Route path='/:category/search/:keyword' component={Catalog} />
      <Route path='/:category/:id' component={Detail} />
      <Route path='/:category' component={Catalog} />
      <Route path='/' exact component={Home} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;