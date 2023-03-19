import React from 'react';
import Form from './components/form/form';
import QueryViewer from './components/queryViewer/queryViewer';
import Header from "./components/header/header";
import Login from "./components/login/login";
import useAuth from "./hooks/useAuth";
import Spinner from "./components/spinner/spinner";
import useSources from "./hooks/useSources";
import useQuery from "./hooks/useQuery";

const App: React.FC = () => {
  const { loginState, login, logout, isAuthFetching } = useAuth();
  const { sources } = useSources(loginState);
  const { submitQuery, queryResult, isQueryFetching } = useQuery();

  if (isAuthFetching) return <Spinner />

  return (
    <div className="App">
      <Header onLogout={logout} loginState={loginState} />
      <main>
        { loginState?.logged_in  ?
          <>
            <Form sources={sources} onSubmit={submitQuery} />
            <QueryViewer queryResult={queryResult} isLoading={isQueryFetching} />
          </> :
          <Login onLogin={login} />
        }
      </main>
    </div>
  );
};

export default App;
