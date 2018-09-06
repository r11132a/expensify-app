import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

//removeExpense
test("should setup REMOVE_EXPENSE action object", () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

//editExpense
test("Should setup EDIT_EXPENSE action object", () => {
    const result = editExpense('123abc',{note: "new note"});
    expect(result).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        updates: {note: "new note"},
    });
});

//addExpense
test("Should setup ADD_EXPENSE object with provided values", () =>{
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "This was last month's rent"
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("Should setup ADD_EXPENSE action object for default values", () => {
    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: "",
            note: "",
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});