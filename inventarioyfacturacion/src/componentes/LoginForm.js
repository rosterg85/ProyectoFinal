// LoginForm.js
import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se inplementa la lógica de autenticación
    // Por ahora, solo comparamos con credenciales almacenadas
    const users = [
      { username: 'usuario1', password: 'contrasena1' },
      { username: 'usuario2', password: 'contrasena2' }
    ];
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      onLogin(username);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;