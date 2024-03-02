import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [expensesList, setExpensesList] = useState([]);

  const addExpenseItemHandler = (productId, productPrice, productName) => {
    setExpensesList((prevExpenseItemList) => {
      return [
        ...prevExpenseItemList,
        { id: productId, price: productPrice, name: productName },
      ];
    });
  };
  return (
    <>
      <ExpenseForm onExpenseForm={addExpenseItemHandler} />
      <ExpenseList Expenses={expensesList}/>
    </>
  );
}

export default App;
