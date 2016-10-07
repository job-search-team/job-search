const test = require('tape')
const { createStore } =  require('redux')


const chartOptionsReducer = require('../reducers/chartOptions')
const currentChartType = require('../reducers/currentChartType')
const chartData = require('../reducers/chartData')

test('chartOptions always return 3 options', function (t) {
  // arrange
  var store = createStore(chartOptionsReducer)

  const action = {type: 'CHANGE_CHART_TYPE', payload: 2}
  const expectedState = {
    1: {
      id: 1,
      chartType: 'jobPrevelence'
    },
    2: {
      id: 2,
      chartType: 'jobAmountBasedOnTech'
    },
    3: {
      id: 3,
      chartType: 'jobAmountBasedOnLocation'
    }
  }

  // action
  store.dispatch(action)

  const actualState = store.getState()

  t.deepEqual(actualState, expectedState)
  t.end()
})

// test for current chart type
test('currentChartType reducer return 1 by default', function (t) {
  // arrange
  var store = createStore(currentChartType)

  const expectedState = 1

  const actualState = store.getState()

  t.deepEqual(actualState, expectedState)
  t.end()
})

test('currentChartType reducer return 1 for whatever action', function (t) {
  // arrange
  var store = createStore(currentChartType)

  const action = {type: 'WHATEVER', chartType: 888}
  const expectedState = 1
  // action
  store.dispatch(action)

  const actualState = store.getState()

  t.deepEqual(actualState, expectedState)
  t.end()
})


test('currentChartType reducer return new chartType based on action', function (t) {
  // arrange
  var store = createStore(currentChartType)

  const action = {type: 'CHANGE_CHART_TYPE', chartType: 2}
  const expectedState = action.chartType
  // action
  store.dispatch(action)

  const actualState = store.getState()

  t.deepEqual(actualState, expectedState)
  t.end()
})

test('charData reducer return {} by default', function (t) {
  // arrange
  var store = createStore(chartData)
  const expectedState = {}

  // action
  const actualState = store.getState()

  // assert
  t.deepEqual(actualState, expectedState)
  t.end()
})

test('charData reducer return new chartData based on action', function (t) {
  // arrange
  var store = createStore(chartData)

  const action = {
    type: 'CHANGE_CHART_TYPE',
    chartData: {
      total: 2756,
      limit: 100,
      skip: 0,
      data: [
        {
          month_term: "2016-09_11ants",
          month: "2016-09",
          term: "11ants",
          percentage_of_jobs: 0.018867924528301886,
          total_mentions: 2,
          total_jobs: 1
        },
        {
          month_term: "2016-08_1562sk",
          month: "2016-08",
          term: "1562sk",
          percentage_of_jobs: 0.2,
          total_mentions: 2,
          total_jobs: 1
        }
      ]
    }
  }
  const expectedState = action.chartData
  // action
  store.dispatch(action)

  const actualState = store.getState()

  t.deepEqual(actualState, expectedState)
  t.end()
})
