import React, { Component } from 'react'
import ChartJobPrevelence from './ChartJobPrevelence'
import ChartJobAmountBasedOnTech from './ChartJobAmountBasedOnTech'
import { Match } from 'react-router'

class ChartsContent extends Component {
  render() {
    return (
      <div className="col-md-9">
        <Match pattern="/charts/job-prevlence" component={ChartJobPrevelence}/>
        <Match pattern="/charts/job-amount-based-on-tech" component={ChartJobAmountBasedOnTech}/>
      </div>
    )
  }
}

export default ChartsContent
