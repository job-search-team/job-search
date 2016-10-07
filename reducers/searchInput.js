module.exports = function(state = '', action) {
  switch(action.type) {
    case 'NEW_SEARCH_TERM':
      return state = action.payload 
      break;
    default:
      return state
  }
}
