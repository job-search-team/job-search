import React, { Component } from 'react'
import Jobsearch from './jobsearch'
import Charts from './charts'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Jobsearch />
        <Charts />
      </div>
    )
  }

}

export default App
