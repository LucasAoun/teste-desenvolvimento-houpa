import React from 'react'
import {Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/detail' component={Detail}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes