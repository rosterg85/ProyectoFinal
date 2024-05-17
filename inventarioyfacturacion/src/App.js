import './componentes/main.css';
import React, { useState } from 'react';
import FormRegistro from './proyectofinal/Registro';
import FormLog from './proyectofinal/Login';
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
