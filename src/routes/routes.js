import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import Resumo from '../pages/resumo/resumo.jsx';

const Routes = () => {

  return (
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/resumo' component={Resumo} exact />
    </Switch>
  )
}

export default Routes