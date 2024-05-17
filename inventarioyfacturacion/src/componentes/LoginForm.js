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
    <div class="container mx-auto px-4 sm:px-8 py-8">
    <form onSubmit={handleSubmit}>
      <input  className="w-48 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input  className="w-48 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Iniciar sesión</button>
    </form>
    </div>
  );
}

export default LoginForm;