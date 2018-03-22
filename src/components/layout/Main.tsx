import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import Counter from '../counter/Counter'
import Home from './Home'

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/counter" component={ Counter } />
                </Switch>
            </div>
        )
    }
}