import uuid from 'uuid';
import database from '../firebase/firebase';

//Component calls an action generator
//Action generator returns an object or function
//Component dispatches object or function
//Redux can't process functions -- redux thunk
//Function runs, does wahtever it needs to, perhaps 
//Redux store changes (runs reducers)

//ADD EXPENSE
export const addExpense = (expense) => ({
        type: 'ADD_EXPENSE',
        expense
    });

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//REMOVE EXPENSE
export const removeExpense = ({id} ={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
