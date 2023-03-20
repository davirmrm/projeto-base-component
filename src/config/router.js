import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../helpers/history';

import components from '../pages/components/components'


export default () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={components} />
      </Switch>
    </Router>
  )
}
