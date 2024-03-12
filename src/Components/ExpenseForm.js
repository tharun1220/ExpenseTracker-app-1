import React, { useState } from "react";

const ExpenseForm = () => {
  const [enteredId, setEnteredId] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [addProduct, setAddProduct] = useState([]);

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  }  

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  }
  
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const submitHandler = (event) => {
        event.preventDefault();
        setAddProduct([...addProduct, {id:Math.random() ,enteredId, enteredPrice, enteredName}]); 
        setEnteredId('');
        setEnteredPrice('');
        setEnteredName('');
        
    }

    const deleteHandler = (id) => {
      setAddProduct(addProduct.filter(expense => expense.id !== id))
    }

    return (
        <><form onSubmit={submitHandler}>
        <div>
          <label htmlFor="productId">Product ID : </label>
          <input id="productId" type="number" value={enteredId} onChange={idChangeHandler}></input>
          <label htmlFor="productPrice">Selling Price : </label>
          <input id="productPrice" type="number" value={enteredPrice} onChange={priceChangeHandler}></input>
          <label htmlFor="productName">Product Name : </label>
          <input id="productName" type="text" value={enteredName} onChange={nameChangeHandler}></input>
          <button type="submit">Add Product</button>
        </div>
      </form>
      <ul>
          {addProduct.map((expense) => (
            <><li key={expense.id}>
              {expense.enteredId} {expense.enteredPrice} {expense.enteredName}
            </li>
              <button onClick={e => deleteHandler(expense.id)}>Delete</button></>
          ))}
        </ul></>
      );
};

export default ExpenseForm;