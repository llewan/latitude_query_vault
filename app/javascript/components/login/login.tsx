import React from 'react';

interface Props {
  onLogin: (username, password) => void
}
const Login: React.FC<Props> = (props) => {
  return (
    <form className="Login" onSubmit={(event) => {
      const target = event.target as Element;
      event.preventDefault();
      // @ts-ignore
      props.onLogin(target.username.value, target.password.value)
    }}>
      <div className="Login-control">
        <label className="Login-labelControl" htmlFor="username">Username</label>
        <input className="Login-inputControl" type="input" defaultValue="Leonardo" name="username" id="username" />
      </div>
      <div className="Login-control">
        <label className="Login-labelControl" htmlFor="password">Password</label>
        <input type="password" className="Login-inputControl" defaultValue="qwerty123" name="password" />
      </div>
      <button className="Login-submitButton">Sign In</button>
    </form>
  );
};

export default Login;
