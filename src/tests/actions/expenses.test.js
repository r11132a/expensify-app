import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense,addExpense,
        startEditExpense,editExpense,
        removeExpense,startRemoveExpense,
        setExpenses,startSetExpenses} from '../../actions/expenses';
import expenses from "../fixtures/expenses"
import database from "../../firebase/firebase"

const uid = "This is my test uid";
const defaultAuthState = {auth:{uid}};
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id,description,note,amount,createdAt}) => {
    expensesData[id] = {note,amount,description,createdAt}
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})

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

test("Should edit expense in firebase and store",(done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updateData = {
    note: "I changed this note"
  };

  store.dispatch(startEditExpense(id,updateData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      updates: updateData,
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual({
      description: expenses[0].description,
      amount: expenses[0].amount,
      createdAt: expenses[0].createdAt,
      note: updateData.note
    })
    done();
  })
})

//addExpense
test("Should setup ADD_EXPENSE object with provided values", () =>{
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("Should add expense to database and store", (done) => {
  const store = createMockStore(defaultAuthState);
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
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done()
  });
})

test("Should add expense with defaults to database and store", (done) => {
    const store = createMockStore(defaultAuthState);
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
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done()
    });
  

})

test("Should setup set expense action object with data",() => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  })
});

test("Should fetch expenses from firebase",(done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});

test("Should remove expense from firebase",(done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startRemoveExpense({id: expenses[0].id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id: expenses[0].id
    });
    return database.ref(`users/${uid}/expenses/${expenses[0].id}`).once("value");
  }).then((snapshot) => {
    expect(snapshot.val()).toBeNull();
    done();
  });
})