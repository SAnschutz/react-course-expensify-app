import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import uuid from 'uuid';

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: 'abc123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "abc123"
    });
});

test('should set up edit expense action object', () => {
    const action = editExpense('1234', {note: 'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234',
        updates: {note: 'new note'}
    });
});


test('should set up addExpense action object with provided values', () => {
    const expenseData = {
        description: 'new description', 
        note: 'new note', 
        amount: 32, 
        createdAt: 100 
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    });
});

test('should set up addExpense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});
