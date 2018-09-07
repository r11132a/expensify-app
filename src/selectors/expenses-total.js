export default (expenses) => {
  return (!expenses) ? 0 : 
         (expenses instanceof Array) ? 
            expenses.reduce((accumulator,expense) => {
              return accumulator + expense.amount;
            },0) : 
            expenses.amount;
};