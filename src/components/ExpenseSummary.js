import React from 'react';
import {connect} from 'react-redux';
import getTotalExpenses from '../selectors/expenses-total'
import numeral from 'numeral'
import selectExpenses from "../selectors/expenses";
export const ExpenseSummary = (props) => {
  return (
    <div>
      Viewing {props.expenseCount} {" "}
      {props.expenseCount === 1 ? "expense " : "expenses "} 
       totalling {numeral(props.expenseTotal / 100).format("$0,0.00")}
    </div>
  );
};

const mapStateToProps = (state) => {
  const expenses = selectExpenses(state.expenses,state.filters);
  return {
    expenseCount: expenses.length,
    expenseTotal: getTotalExpenses(expenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);