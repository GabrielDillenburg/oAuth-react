import { Route } from "react-router-dom";
import LoginButton from './auth/LoginButton'
import LogoutButton from './auth/LogoutButton'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <div className="App-body">
        <span>
          <LoginButton />
          <LogoutButton />
        </span>
        <Route path="/challenges"/>
      </div>
    </div>
  );
}

export default App;
