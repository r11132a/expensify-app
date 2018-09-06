import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1 className="big-fucking-warning">404</h1>
    <p className="fucking-warning">Wrong page, mother fucker!</p>
    <Link className="fucking-warning" to="/">Go back to Amsterdam!</Link>
  </div>
);

const xNotFoundPage = () => (
  <div>404!</div>
)

export default NotFoundPage;
