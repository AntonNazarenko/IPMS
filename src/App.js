import React from 'react'
import './App.css'

import { Router, browserHistory } from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import { createBrowserHistory } from 'history'

import StoreWrapper from './StoreWrapper'
import Itc from './components/Itc'

const history = createBrowserHistory()

function App(){
    return (
          <StoreWrapper>
            <Router history={history}>
                <Itc />
            </Router >
          </StoreWrapper>
    )
}

export default App

