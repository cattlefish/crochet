import 'uikit/dist/css/uikit.min.css';
import './styles/main.scss'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Shell from './components/layout/Shell'

ReactDOM.render(
<BrowserRouter>
    <Shell />
</BrowserRouter>
, document.getElementById('app'))
