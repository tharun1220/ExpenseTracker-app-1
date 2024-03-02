import React, { useRef } from "react";

const ExpenseForm = (props) => {
  const idInputRef = useRef();
  const priceInputRef = useRef();
  const nameInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const eneteredId = idInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const eneteredName = nameInputRef.current.value;

        props.onExpenseForm(eneteredId,enteredPrice,eneteredName);

        idInputRef.current.value = '';
        priceInputRef.current.value = '';
        nameInputRef.current.value = ''; 
    }

    return (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="productId">Product ID : </label>
            <input id="productId" type="number" ref={idInputRef}></input>
            <label htmlFor="productPrice">Selling Price : </label>
            <input id="productPrice" type="number" ref={priceInputRef}></input>
            <label htmlFor="productName">Product Name : </label>
            <input id="productName" type="text" ref={nameInputRef}></input>
            <button type="submit">Add Product</button>
          </div>
        </form>
      );
};

export default ExpenseForm;