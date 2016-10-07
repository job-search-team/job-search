const initialState = 1
// action : {type: 'CHANGE_CHART_TYPE', chartType: 2}
module.exports = function (state=initialState, action) {
  switch (action.type) {
    case 'CHANGE_CHART_TYPE':
      return action.chartType
    default:
      return state
  }
}
