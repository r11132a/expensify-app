import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense,addExpense,editExpense,removeExpense} from '../../actions/expenses';
import expenses from "../fixtures/expenses"
import database from "../../firebase/firebase"

const createMockStore = configureMockStore([thunk])

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("Should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      },  
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done()
  });
})

test("Should add expense with defaults to database and store", (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: "",
      amount: 0,
      note: "",
      createdAt: 0
    };
  
    store.dispatch(startAddExpense(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        },  
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done()
    });
  

})

/* test("Should setup ADD_EXPENSE action object for default values", () => {
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
}); */