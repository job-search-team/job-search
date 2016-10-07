var test = require('tape')
const initialState = require('../state')
const searchInput = require('../reducers/searchInput')
const dates = require('../reducers/dates')

test('testing job-search', function (t) {
  t.ok(true)
  t.end()
})

test('testing searchInput is set from user', function (t) {
  const expected = 'react'
  const action = {
    type: 'NEW_SEARCH_TERM',
    payload: 'react'
  }
  const actual = searchInput(initialState.searchInput, action)
  t.equal(actual, expected)
  t.end()
})

test('testing searchInput updates after state change to new state', function (t) {
  var initial = 'react'
  const action = {
    type: 'NEW_SEARCH_TERM',
    payload: 'ruby'
  }
  const expected ='ruby'
  const actual = searchInput(initial, action)
  t.equal(actual, expected)
  t.end()
})

test('testing setting a new start date after initial', function (t) {
  const expected = {start: '2016-10-07', end: ''}
  const action = {
    type: 'NEW_DATE',
    payload: {
      dateType: 'start',
      value: '2016-10-07'
    }
  }
  const actual = dates(initialState.dates, action)
  t.deepEqual(actual, expected)
  t.end()
})

test('testing setting a new date after state change', function (t) {
  const initial = {start: '2015-10-04', end: '2016-10-07'}
  const expected = {start: '2015-10-04', end: '2016-02-01'}
  const action = {
    type: 'NEW_DATE',
    payload: {
      dateType: 'end',
      value: '2016-02-01'
    }
  }
  const actual = dates(initial, action)
  t.deepEqual(actual, expected)
  t.end()
})
