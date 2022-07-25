import { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/auth-slice";
import classes from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(authAction.logout());
  });

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLoggedIn && (
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </>
          )}
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
