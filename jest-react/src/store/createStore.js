import {createStore, combineReducers} from 'redux';

import  {reducer as todoReducer} from '../containers/TodoListPage/store';

const reducer = combineReducers({
   todo: todoReducer
});

const store = createStore(reducer);

export default store;