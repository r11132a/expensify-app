import React from 'react'
import expenses from "../fixtures/expenses"
import {ExpenseSummary} from "../../components/ExpenseSummary";
import {shallow} from "enzyme";

test("Should render with two expenses",() => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={2} expenseTotal={109695} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Should render with one expense", () => {
  const wrapper = shallow(
    <ExpenseSummary expenseCount={1} expenseTotal={195} />
  );
  expect(wrapper).toMatchSnapshot();
});