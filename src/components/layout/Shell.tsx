import * as React from 'react'

import Navigation from '../nav/Navigation'
import Main from './Main'

export default class Shell extends React.Component {
    render() {
        return(
            <div>
                <Navigation />
                <div className="uk-section">
                    <div className="uk-container">
                        <Main />
                    </div>
                </div>
            </div>
        )
    }
}