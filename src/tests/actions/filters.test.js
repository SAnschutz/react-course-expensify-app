import { 
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('should set up setTextFilter action object with provided text', () => {
    const text = 'some text';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('shoUld set up setTextFilter action object with no provided text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should set up sortByDate action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should set up sortByAmount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should set up setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should set up setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
