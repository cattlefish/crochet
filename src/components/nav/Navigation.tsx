import * as React from 'react'

import NavigationItem from './NavigationItem'

interface Props {

}

interface State {
    isOpen: boolean
}

export default class Navigation extends React.Component<Props, State> {
    
    constructor(props : any) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const navItems = [
            { text: 'Home', link: '/' },
            { text: 'Crochet Counter', link: '/counter' }            
        ]

        return (
            <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
                <nav className="uk-navbar-container ao-navbar-container" uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            {
                                navItems.map(item => {
                                    return <NavigationItem { ...item }/>
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}