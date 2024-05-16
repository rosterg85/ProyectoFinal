import './App.css';
import React, { useState } from 'react';
import LoginForm from "./componentes/LoginForm"
import HomePage from './componentes/Homepage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };
  return (
    <div className="App">
      <header className="InventarioyVentas">
      {loggedInUser ? (
        <HomePage username={loggedInUser} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
      </header>
    </div>
  );
}

export default App;
