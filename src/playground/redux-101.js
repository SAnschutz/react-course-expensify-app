import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count } = {}) => ({
    type: "SET",
    count
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + increment
            };
        case 'DECREMENT':
            const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrement
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    };
};

const store = createStore(countReducer);

store.subscribe((() => {
    console.log(store.getState());
}));

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(incrementCount({ incrementBy: 2 }));


store.dispatch(decrementCount({ decrementBy: 100 }));
store.dispatch(decrementCount());
store.dispatch(setCount({ count: 444 }));

