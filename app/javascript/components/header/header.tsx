import React from 'react';
import {LoggedInResponse} from "../../business/interfaces";

interface Props {
  onLogout: () => void;
  loginState: LoggedInResponse,
}

const Header: React.FC<Props> = (props) => {
  const { loginState, onLogout } = props;
  const { user, logged_in: loggedIn} = loginState ?? {};
  return (
    <div className="Header">
      <h1 className="Header-title">Query Vault</h1>
      <div className="Header-actions">
        { loggedIn && user ? (
          <>
            <span>Hello {user.username}</span>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default Header;
