import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';



test('should render ExpensesSummary correctly with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={33}/>);
    expect(wrapper).toMatchSnapshot();

});

test('should render ExpensesSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={342} expensesTotal={3423423432}/>);
    expect(wrapper).toMatchSnapshot();
});