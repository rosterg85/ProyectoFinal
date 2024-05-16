import React, { useState } from 'react';
import './estilos.css';

const productsData = [
  { id: 1, name: 'Producto 1', stock: 10, empaque: 'Caja', price: 10.50 },
  { id: 2, name: 'Producto 2', stock: 5, empaque: 'Bolsa', price: 8.75 },
  { id: 3, name: 'Producto 3', stock: 20, empaque: 'Bolsa', price: 12.25 },
  { id: 4, name: 'Producto 4', stock: 15, empaque: 'Caja', price: 15.00 },
];

const HomePage = ({ username }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [newPrice, setNewPrice] = useState('');
  const [Adicionar, setAdicionar] = useState('');
  const [products, setProducts] = useState(productsData);
  const [newName, setNewName] = useState('');
  const [newExistencia, setNewExistencia] = useState('');
  const [newTipo, setNewTipo] = useState('');
  const [newPrecio, setNewPrecio] = useState('');

  const handleRowSelect = (productId) => {
    setSelectedProductId(productId);
    const selectedProduct = products.find(product => product.id === productId);
    if (selectedProduct) {
      setNewPrice(selectedProduct.price.toString());
      setAdicionar(selectedProduct.stock.toString());
    }
  };

  const handlePriceChange = (e) => {
    setNewPrice(e.target.value);
  };

  const handleStockChange = (e) => {
    setAdicionar(e.target.value);
  };
  const manejoCambioNombre =(e) =>{
    setNewName(e.target.value);
  } ;
  const manejoCambioExistencia =(e) =>{
    setNewExistencia(e.target.value);
  } ;
  const manejoCambioTipo =(e) =>{
    setNewTipo(e.target.value);
  } ;
  const manejoCambioPrecio =(e) =>{
    setNewPrecio(e.target.value);
  } ;

  const handleUpdateProduct = () => {
    if (!selectedProductId) {
      alert('Por favor selecciona un producto.');
      return;
    }

    const updatedProducts = products.map(product => {
      if (product.id === selectedProductId) {
        let updatedStock=0;
        if(Adicionar){ updatedStock = product.stock + parseInt(Adicionar);}
        else { updatedStock = product.stock; }
        
        return {
          ...product,
          price: parseFloat(newPrice),
          stock: parseFloat(updatedStock)
        };
      }
      return product;
    });
    

    setProducts(updatedProducts);
    setNewPrice('');
    setAdicionar('');
    setSelectedProductId(null);
  };

  const handleDelProduct = () =>{
    if (!selectedProductId) {
        alert('Por favor selecciona un producto.');
        return;
      }
      let newProducts = products.filter(product => product.id !== selectedProductId);
            setProducts(newProducts);
            setSelectedProductId(null);
  };

const handleAddProduct = () => {
        if (!newName || !newExistencia || !newTipo || !newPrecio) {
          alert('Por favor completa todos los campos.');
          return;
        }
    
        const nuevoProducto = {
          id: products.length + 1,
          name: newName,
          stock: parseInt(newExistencia),
          empaque: newTipo, // Puedes cambiar esto según tus necesidades
          price: parseFloat(newPrecio),
        };
        
    setProducts([...products, nuevoProducto]);
    setNewName('');
    setNewExistencia('');
    setNewTipo('');
    setNewPrecio('');
  };

  return (
    <div className="home-page">
        
      <h2>Bienvenido, A la pagina de inventario {username}!</h2>
      
      <h3>Productos</h3>
      <table>
        <thead>
          <tr>
            <th>Seleccionar</th>
            <th>Nombre</th>
            <th>Existencias</th>
            <th>Tipo de Empaque</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <input
                  type="radio"
                  name="selectedProduct"
                  value={product.id}
                  checked={selectedProductId === product.id}
                  onChange={() => handleRowSelect(product.id)}
                />
              </td>
              <td>{product.name}</td>
              <td>${product.stock.toFixed(0)}</td>
              <td>{product.empaque}</td>
              <td>${product.price.toFixed(0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="form-group">
        <label htmlFor="newPrice">Nuevo Precio: </label>
        <input type="number" id="newPrice" min="0" value={newPrice} onChange={handlePriceChange} />
      </div>
      <div className="form-group">
        <label htmlFor="Adicionar">Adicionar productos: </label>
        <input type="number" id="Adicionar" min="0" value={Adicionar} onChange={handleStockChange} />
      </div>
      <button onClick={handleUpdateProduct}>Actualizar Producto</button>
      <button onClick={handleDelProduct}>Borrar Producto</button>
      <div className="home-page">
      <h3>Adicionar Producto</h3>
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
            <td> <input   type="text" id="newName" name="newName"   value={newName} onChange={manejoCambioNombre} /> </td>
            <td> <input   type="text" id="newExistencia" name="newExistencia"  value={newExistencia} onChange={manejoCambioExistencia}  /> </td>
            <td> <input   type="text" id="newTipo" name="newTipo" value={newTipo} onChange={manejoCambioTipo} /> </td>
            <td> <input   type="text" id="newPrecio" name="newPrecio" value={newPrecio}  onChange={manejoCambioPrecio}/> </td>
        </tbody>
        <button onClick={handleAddProduct}>Ingresar Producto</button>
      </table>

      </div>
    </div>
    
  );
};

export default HomePage;