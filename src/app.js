
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: "Water bill", amount: 20000, note: 'something witty goes here', createdAt: 100}));
store.dispatch(addExpense({description: 'Gas Bill', note: 'I dont need this', amount: 200, createdAt: 2342389798}));
store.dispatch(addExpense({description: "Water", amount: 2309847, note: 'something witty goes here', createdAt: 1030}));
store.dispatch(addExpense({description: 'Gas', note: 'I dont need this', amount: 34312, createdAt: 34273463}));
store.dispatch(addExpense({description: "Garage", amount: 23, note: 'something witty goes here', createdAt: 182451237645}));
store.dispatch(addExpense({description: 'Electric Bill', note: 'I dont need this', amount: 37296387621, createdAt: -4098123704981273409182734}));
store.dispatch(addExpense({description: "Groceries", amount: 10293871892735478612534, note: 'something witty goes here', createdAt: -23234}));
store.dispatch(addExpense({description: 'Cell phone service', note: 'I dont need this', amount: 234, createdAt: -23423}));
store.dispatch(addExpense({description: "Phone bill", amount: 234892039487, note: 'something witty goes here', createdAt: 3423}));
store.dispatch(addExpense({description: 'CDs', amount: 201234129340, createdAt: -83498736}));



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));


