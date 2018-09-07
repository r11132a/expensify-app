import getExpensesTotal from '../../selectors/expenses-total';
import expenses from "../fixtures/expenses";

test("Should return 0 if no expenses",() => {
  expect(getExpensesTotal()).toBe(0);
  expect(getExpensesTotal([])).toBe(0);
});

test("Should correctly add up a single expense",() => {
  expect(getExpensesTotal(expenses[0])).toBe(195);
  expect(getExpensesTotal(expenses.slice(0,1))).toBe(195);
});

test("Should correctly return the total if sent an array of expenses",()=> {
  expect(getExpensesTotal(expenses)).toBe(114195);
});