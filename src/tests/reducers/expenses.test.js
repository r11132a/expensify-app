import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test("Should set default state",() => {
    const state = expensesReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([]);
});

test("Should remove expense by id",() => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test("Should not remove expenses",() => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: 99
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
})

test("Should add expense",() => {
    const expense = {
        id: "10",
        description: "New Expense",
        amount: 9500,
        createdAt: 0,
        note: ""
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

test("Should edit an expense",() => {
    const updates = {
        note: "New Data"
    }
    const expense = {
        ...expenses[2],
        ...updates
    }
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[2].id,
        updates
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[1],expense]);
    expect(state[2].note).toBe("New Data");
});

test("Should not edit expense if invalid id",() => {
    const updates = {
        note: "Bogus data"
    }
    const action = {
        type: "EDIT_EXPENSES",
        id: 99,
        updates
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});