import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter.js'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters";
import getVisableExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({description: "Water Bill",createdAt:0,amount:4500}));
store.dispatch(addExpense({description: "Gas Bill",createdAt:1000,amount:15000}));
store.dispatch(addExpense({description: "Rent",createdAt:0,amount:109500}));

const state = store.getState();
const visableExpenses = getVisableExpenses(state.expenses,state.filters);
console.log(visableExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx,document.getElementById("app"));
