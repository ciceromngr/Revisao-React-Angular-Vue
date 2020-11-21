import React from 'react'

import { Switch } from 'react-router-dom'
import { Route } from './Route';
import { Login } from '../pages/login';
import { Dashboard } from '../pages/dashboard';
import { Tarefas } from '../pages/tarefas';
export const Routes = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/tarefas" exact component={Tarefas} isPrivate />
    </Switch>
)