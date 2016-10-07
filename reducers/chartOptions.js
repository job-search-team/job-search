const initialState = {
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

module.exports = function (state = initialState, action) {
  return state
}
