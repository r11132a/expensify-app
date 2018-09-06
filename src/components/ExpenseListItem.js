import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = (props) => (
  <tr>
    <td>
      <Link to={`/edit/${props.id}`}>{props.description}</Link></td>
    <td>{props.amount}</td>
    <td>{props.createdAt}</td>
  </tr>
);

export default ExpenseListItem;
