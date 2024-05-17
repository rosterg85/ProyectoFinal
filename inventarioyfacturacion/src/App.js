import './componentes/main.css';
import React, { useState } from 'react';
import HomePage from './componentes/Homepage';
import LoginForm from './componentes/LoginForm';

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
