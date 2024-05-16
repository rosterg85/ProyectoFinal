import React from 'react';

const productsData = [
  { id: 1, name: 'Producto 1', stock: 10, packaging: 'Caja', price: 10.50 },
  { id: 2, name: 'Producto 2', stock: 5, packaging: 'Bolsa', price: 8.75 },
  { id: 3, name: 'Producto 3', stock: 20, packaging: 'Bolsa', price: 12.25 },
  { id: 4, name: 'Producto 4', stock: 15, packaging: 'Caja', price: 15.00 },
];

const HomePage = ({ username }) => {
  return (
    <div>
      <h2>Bienvenido, {username}!</h2>
      <p>Esta es tu página de inicio.</p>
      
      <h3>Productos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Existencias</th>
            <th>Tipo de Empaque</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>{product.packaging}</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;