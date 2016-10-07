const { combineReducers } = require('redux')

const cart = require('./cart')
const products = require('./products')

 module.exports = combineReducers({
   cart,
   products
 })
