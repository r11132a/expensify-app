import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import authReducer from "../reducers/auth"
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";


const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    componseEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
// Store creation
