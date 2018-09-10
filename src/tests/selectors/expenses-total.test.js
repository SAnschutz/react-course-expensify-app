import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const emptyExpenseArray = [];
    expect(selectExpensesTotal(emptyExpenseArray)).toBe(0);
});

test('should correctly add up a single expense', () => {
    const singleExpenseArray = [expenses[0]];
    expect(selectExpensesTotal(singleExpenseArray)).toBe(195); 
});

test('should correctly add up multiple expenses', () => {
    const multipleExpensesArray = [...expenses];
    expect(selectExpensesTotal(multipleExpensesArray)).toBe(114195);
});
