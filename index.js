import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './components/app'

injectTapEventPlugin()

render(<App name='job-search' />, document.querySelector('main'))
console.log('welcome to job-search')
