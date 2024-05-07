import React from 'react';
import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';
const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        //provider의 value 값이 매개값으로 온다.
        return (
          <nav className={classes.nav}>
            <ul>
              {context.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {context.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
