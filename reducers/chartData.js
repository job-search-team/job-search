const initialState = {}
// action : {type: 'CHANGE_CHART_TYPE', chartData: {}}
module.exports = function (state=initialState, action) {
  switch (action.type) {
    case 'CHANGE_CHART_TYPE':
      return action.chartData
    default:
      return state
  }
}
