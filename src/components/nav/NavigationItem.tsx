import * as React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    link: string,
    text: string
}

interface State {

}

export default class NavigationItem extends React.Component<Props, State> {

    constructor(props : any) {
        super(props)
    }

    render() {
        return (
            <li>
                <Link to={ this.props.link }> { this.props.text }</Link>
            </li>
        )
    }
}