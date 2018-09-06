import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) :
      (

     
    <table>
      <tbody>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>created At</th>
        </tr>
      {props.expenses.map((expense,idx) => (
        <ExpenseListItem
          key={expense.id}
          {...expense} />
      ))}
      </tbody>
    </table>
  )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses,state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
