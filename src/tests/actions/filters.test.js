import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../../actions/filters';
import moment from 'moment';


//SET_TEXT_FILTER
test("Should generate SET_TEXT_FILTER with default arguments",() =>{
    const action = setTextFilter("");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    })
});

test("Should generate SET_TEXT_FILTER with passed arguments",() => {
    const action = setTextFilter("foo");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "foo"
    })
});

//SORT_BY_DATE
test("Should generate SORT_BY_DATE action object",() => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

//SORT_BY_AMOUNT
test("Should generate SORT_BY_AMOUNT action object", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

//SET_START_DATE
test("Should generate SET_START_DATE action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
});

//SET_END_DATE
test("Should generate SET_END_DATE action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
});