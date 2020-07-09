import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Home'
import Group from './Group'

export default function Main() {

    return (
        <div className="main">
            <Switch>
                <Route path={`/group/:gname`}  component={Group}/>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    )
}

