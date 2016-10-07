const initialState = require('../state').dates

module.exports = function(state= initialState, action){
  switch(action.type) {
    case 'NEW_DATE':
      return {...state, [action.payload.dateType]: action.payload.value}
      break;
    default:
      return state
  }
}
