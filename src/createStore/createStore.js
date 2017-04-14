
var redux = require('redux');
var {setInitialValuesReducer} = require('./../reducers/reducers');
export var config = (initialState = {}) => {
	var reducer = redux.combineReducers({
		values: setInitialValuesReducer
	})
	var store = redux.createStore(reducer);
	return store;
}